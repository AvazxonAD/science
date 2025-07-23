const authService = require("./service");

async function register(req, res) {
  const checkLogin = await authService.getByLogin({ ...req.body });
  if (checkLogin) {
    return res.error("Login already exists", 400);
  }

  const checkEmail = await authService.getByEmail({ ...req.body });
  if (checkEmail) {
    return res.error("Email already exists", 400);
  }

  const result = await authService.register({ ...req.body });

  return res.success("Register success", 201, result);
}

async function login(req, res) {
  const result = await authService.login({ ...req.body });

  return res.success("Login success", 200, result);
}

async function me(req, res) {
  const result = await authService.getById({ id: req.user.id });

  return res.success("Get me success", 200, result);
}

async function getUsers(req, res) {
  if (!req.user.is_admin) {
    return res.error("Cannot access", 403);
  }

  const result = await authService.getUsers({});

  return res.success("Get users success", 200, result);
}

module.exports = {
  register,
  login,
  me,
  getUsers,
};
