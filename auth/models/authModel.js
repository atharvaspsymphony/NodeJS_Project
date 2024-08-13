const pool = require('../../config/db');
const bcrypt = require('bcrypt');

const registerUser = async (user) => {
  const { name, email, password } = user;
  const hashedPassword = await bcrypt.hash(password, 10);
  const res = await pool.query(
    'INSERT INTO clients (name, email, password) VALUES ($1, $2, $3) RETURNING *',
    [name, email, hashedPassword]
  );
  return res.rows[0];
};

const findUserByEmail = async (email) => {
  const res = await pool.query('SELECT * FROM clients WHERE email = $1', [email]);
  return res.rows[0];
};

const findUserById = async (id) => {
  const res = await pool.query('SELECT * FROM clients WHERE id = $1', [id]);
  return res.rows[0];
};

const verifyClient = async (email) => {
  const res = await pool.query(
    'UPDATE clients SET is_verified = TRUE WHERE email = $1 RETURNING *',
    [email]
  );
  return res.rows[0];
};

const getAllClients = async () => {
  const res = await pool.query('SELECT name,email FROM clients');
  return res.rows;
}

module.exports = {
  registerUser,
  findUserByEmail,
  findUserById,
  verifyClient,
  getAllClients,
};
