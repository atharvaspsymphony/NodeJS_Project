const pool = require('../../config/db');

const getAllUsers = async () => {
  const res = await pool.query('SELECT * FROM users');
  return res.rows;
};

const getUserById = async (id) => {
  const res = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
  return res.rows[0];
};

const getUserByName = async (name) => {
  const res = await pool.query("SELECT * FROM users WHERE name  = $1",[name]);
  return res.rows[0];
}

const createUser = async (user) => {
  const { name, email } = user;
  const res = await pool.query(
    'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
    [name, email]
  );
  return res.rows[0];
};

const updateUser = async (id, user) => {
  const { name, email } = user;
  const res = await pool.query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *',
    [name, email, id]
  );
  return res.rows[0];
};

const deleteUser = async (id) => {
  const res = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
  return res.rows[0];
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getUserByName
};
