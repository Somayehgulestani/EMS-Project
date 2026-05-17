const Joi = require("joi");

const createStudentValidationSchema = Joi.object({
  user: Joi.string().required(),

  phone: Joi.string().required(),

  address: Joi.string().required(),

  academicStatus: Joi.string().valid("active", "inactive", "graduated"),

  financialStatus: Joi.string().valid("paid", "partial", "unpaid"),
});

module.exports = {
  createStudentValidationSchema,
};
