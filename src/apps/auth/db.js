const { db } = require("../../config/index");

async function register(params) {
  const query = `INSERT INTO users (email, password, username, created_at, updated_at) VALUES($1, $2,  $3, now(), now()) RETURNING *`;

  const result = await db.query(query, params);

  return result[0];
}

async function login(params) {
  const query = `SELECT * FROM users WHERE username = $1 AND is_active = true`;

  const result = await db.query(query, params);

  return result[0];
}

async function getByEmail(params) {
  const query = `SELECT * FROM users WHERE email = $1 AND is_active = true`;

  const result = await db.query(query, params);

  return result[0];
}

async function getByLogin(params) {
  const query = `SELECT * FROM users WHERE username = $1 AND is_active = true`;

  const result = await db.query(query, params);

  return result[0];
}

async function getById(params) {
  const query = `SELECT * FROM users WHERE id = $1 AND is_active = true`;

  const result = await db.query(query, params);

  return result[0];
}

async function getUsers(params) {
  const query = `SELECT * FROM users WHERE is_active = true`;

  const result = await db.query(query, params);

  return result;
}

module.exports = {
  register,
  login,
  getById,
  getByEmail,
  getByLogin,
  getUsers,
};
