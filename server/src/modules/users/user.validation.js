const Joi = require("joi");

/*
   Update User Role Validation */

const updateUserRoleValidation = Joi.object({
  role: Joi.string().valid("admin", "instructor", "student").required(),
});

/*
   Update User Status Validation */

const updateUserStatusValidation = Joi.object({
  isActive: Joi.boolean().required(),
});

module.exports = {
  updateUserRoleValidation,
  updateUserStatusValidation,
};
