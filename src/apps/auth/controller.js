const authService = require("./service");

async function register(req, res) {
  const result = await authService.register({ ...req.body });

  return res.success("Register success", 201, result);
}

async function login(req, res) {
  const result = await authService.login({ ...req.body });

  return res.success("Login success", 200, result);
}

async function me(data) {
  const result = await authService.getById([data.id]);

  return res.success("Login success", 200, result);
}

module.exports = {
  register,
  login,
  me,
};
