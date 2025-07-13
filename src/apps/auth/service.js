const authDB = require("./db");
const generateToken = require("../../utils/generateToken");
const bcyrpt = require("bcrypt");
const ErrorResponse = require("../../utils/errorResponse");

async function register(data) {
  const hashedPassword = await bcyrpt.hash(data.password, 10);

  console.log(hashedPassword);
  const result = await authDB.register([data.email, hashedPassword]);

  return result;
}

async function login(data) {
  const user = await authDB.login([data.email]);

  if (!user) {
    throw new ErrorResponse("user not found", 400);
  }

  const checkPassword = await bcyrpt.compare(data.password, user.password);
  if (!checkPassword) {
    throw new ErrorResponse("Incorrect password entered", 400);
  }

  const token = generateToken(user);

  return { user, token };
}

async function getById(data) {
  const result = await authDB.getById([data.id]);

  return result[0];
}

module.exports = {
  register,
  login,
  getById,
};
