const Joi = require("joi");

const createStudentValidationSchema = Joi.object({
  user: Joi.string(),

  academicStatus: Joi.string().valid("active", "inactive", "graduated"),

  financialStatus: Joi.string().valid("paid", "partial", "unpaid"),
});

module.exports = {
  createStudentValidationSchema,
};
