const crypto = require('crypto');

const generateOtp = () => {
  return crypto.randomInt(100000, 999999).toString();
};

const generateOtpExpiry = () => {
  const now = new Date();
  now.setMinutes(now.getMinutes() + 10); // OTP valid for 10 minutes
  return now;
};

module.exports = {
  generateOtp,
  generateOtpExpiry,
};
