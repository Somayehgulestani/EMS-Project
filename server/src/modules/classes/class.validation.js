const Joi = require("joi");

const createClassValidationSchema = Joi.object({
  course: Joi.string().required(),

  instructor: Joi.string().required(),

  startDate: Joi.date().required(),

  endDate: Joi.date().required(),

  schedule: Joi.string().required(),
});

module.exports = {
  createClassValidationSchema,
};
