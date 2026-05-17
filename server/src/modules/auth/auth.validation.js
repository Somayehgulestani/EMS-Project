const Joi = require("joi");

const registerValidation = Joi.object({
  fullName: Joi.string().required(),

  email: Joi.string().email().required(),

  password: Joi.string().min(6).required(),

  role: Joi.string().valid("admin", "instructor", "student").required(),
});

const loginValidation = Joi.object({
  email: Joi.string().email().required(),

  password: Joi.string().required(),
});

module.exports = {
  registerValidation,
  loginValidation,
};
