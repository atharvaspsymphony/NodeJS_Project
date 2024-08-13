const otpModel = require('../models/otpModel');
const otpService = require('../services/otpService');
const authModel = require('../models/authModel');


async function sendOtp(req) {
  try {
    const otpCode = otpService.generateOtp();
    const expiresAt = otpService.generateOtpExpiry();
    const otp = await otpModel.createOtp(req.email, otpCode, expiresAt);

    // Simulate sending OTP via email/SMS
    console.log(`OTP for ${req.email}: ${otpCode}`);

  } catch (err) {
    console.log("error",err);

  }
}

const sendOtpAPI = async (req, res) => {
  try {
    console.log(req.params);
    const otpCode = otpService.generateOtp();
    const expiresAt = otpService.generateOtpExpiry();
    const otp = await otpModel.createOtp(req.params.email, otpCode, expiresAt);

    // Simulate sending OTP via email/SMS
    console.log(`OTP for ${req.email}: ${otpCode}`);
    res.status(200).json({ message: 'OTP sent' });

  } catch (err) {
    console.log("error",err);

  }
};

const validateOtp = async (req, res) => {
  try {
    const otp_code = req.body.otp_code;
    const otp = await otpModel.findOtpByEmail(req.body.email);

    if (otp && otp_code === otp_code && new Date() < new Date(otp.expires_at)) {
      await otpModel.verifyOtp(req.body.email);
      res.status(200).json({ message: 'OTP verified' });
      if(res.statusCode==200){
        console.log("verifying client");
        await authModel.verifyClient(req.body.email);
      }
    } else {
      res.status(400).json({ message: 'Invalid or expired OTP' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  sendOtp,
  validateOtp,
  sendOtpAPI,
};
