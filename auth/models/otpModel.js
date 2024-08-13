const pool = require('../../config/db');

const createOtp = async (email, otpCode, expiresAt) => {
  const res = await pool.query(
    'INSERT INTO otps (email, otp_code, expires_at) VALUES ($1, $2, $3) RETURNING *',
    [email, otpCode, expiresAt]
  );
  return res.rows[0];
};

const findOtpByEmail = async (email) => {
  const res = await pool.query('SELECT * FROM otps WHERE email = $1', [email]);
  return res.rows[0];
};

const verifyOtp = async (email) => {
  const res = await pool.query(
    'UPDATE otps SET is_verified = TRUE WHERE email = $1 RETURNING *',
    [email]
  );
  return res.rows[0];
};

module.exports = {
  createOtp,
  findOtpByEmail,
  verifyOtp,
};
