// const Joi = require("joi");

// /*
//  Send Verification Code Validation
// */

// const sendVerificationCodeValidation = Joi.object({
//   fullName: Joi.string().required(),

//   email: Joi.string().email().required(),

//   password: Joi.string().min(6).required(),

//   role: Joi.string().valid("student", "instructor").required(),
// });

// /*
//  Verify Email Validation
// */

// const verifyEmailValidation = Joi.object({
//   email: Joi.string().email().required(),

//   code: Joi.string().length(6).required(),
// });

// /*
//  Login Validation
// */

// const loginValidation = Joi.object({
//   email: Joi.string().email().required(),

//   password: Joi.string().required(),
// });

// module.exports = {
//   sendVerificationCodeValidation,
//   verifyEmailValidation,
//   loginValidation,
// };

const Joi = require("joi");

/*
| Send Verification Code Validation
*/

const sendVerificationCodeValidation = Joi.object({
  fullName: Joi.string().required(),

  email: Joi.string().email().required(),
  phone: Joi.string().required(),

  password: Joi.string().min(6).required(),

  role: Joi.string().valid("student", "instructor").required(),
});

/*
| Verify Email Validation
*/

const verifyEmailValidation = Joi.object({
  email: Joi.string().email().required(),

  code: Joi.string().length(6).required(),
});

/*
| User Login Validation
*/

const loginValidation = Joi.object({
  email: Joi.string().email().required(),

  password: Joi.string().required(),
});

/*
| Admin Login Validation
*/

const adminLoginValidation = Joi.object({
  email: Joi.string().email().required(),

  password: Joi.string().required(),

  adminSecret: Joi.string().required(),
});

module.exports = {
  sendVerificationCodeValidation,
  verifyEmailValidation,
  loginValidation,
  adminLoginValidation,
};
