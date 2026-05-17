const Joi = require("joi");

const createCourseValidationSchema = Joi.object({
  title: Joi.string().required(),

  description: Joi.string().required(),

  duration: Joi.string().required(),

  fee: Joi.number().required(),
});

module.exports = {
  createCourseValidationSchema,
};
