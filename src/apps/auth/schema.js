const Joi = require("../../utils/joi");

function register() {
  return Joi.object({
    body: Joi.object({
      email: Joi.string()
        .trim()
        .pattern(/^[\w.-]+@gmail\.com$/)
        .required(),
      username: Joi.string().required().min(5),
      password: Joi.string().trim().min(6).required(),
    }),
  });
}

function login() {
  return Joi.object({
    body: Joi.object({
      username: Joi.string().required().min(5),
      password: Joi.string().trim().min(6).required(),
    }),
  });
}

module.exports = {
  login,
  register,
};
