const authDB = require("./db");
const generateToken = require("../../utils/generateToken");
const bcyrpt = require("bcrypt");
const ErrorResponse = require("../../utils/errorResponse");

async function register(data) {
  const hashedPassword = await bcyrpt.hash(data.password, 10);

  const result = await authDB.register([data.email, hashedPassword, data.username]);

  return result;
}

async function login(data) {
  const user = await authDB.login([data.username]);

  if (!user) {
    throw new ErrorResponse("user not found", 400);
  }

  const checkPassword = await bcyrpt.compare(data.password, user.password);
  if (!checkPassword) {
    throw new ErrorResponse("Incorrect password entered", 400);
  }

  const token = generateToken(user);

  delete user.password;

  return { user, token };
}

async function getById(data) {
  const result = await authDB.getById([data.id]);

  return result;
}

async function getByLogin(data) {
  const result = await authDB.getByLogin([data.username]);

  return result;
}

async function getByEmail(data) {
  const result = await authDB.getByEmail([data.email]);

  return result;
}

async function getUsers(data) {
  const result = await authDB.getUsers([]);

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
