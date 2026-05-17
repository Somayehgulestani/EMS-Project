const Joi = require("joi");

const createInstructorValidationSchema = Joi.object({
  user: Joi.string().required(),

  specialization: Joi.string().required(),

  salary: Joi.number().required(),

  phone: Joi.string().required(),
});

module.exports = {
  createInstructorValidationSchema,
};
