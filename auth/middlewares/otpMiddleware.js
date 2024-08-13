const otpModel = require('../models/otpModel');

const otpMiddleware = async (req, res, next) => {
  const userId = req.user.id;
  const otp = await otpModel.findOtpByUserId(userId);

  if (otp && otp.is_verified) {
    next();
  } else {
    return res.status(401).json({ message: 'OTP not verified' });
  }
};

module.exports = otpMiddleware;
