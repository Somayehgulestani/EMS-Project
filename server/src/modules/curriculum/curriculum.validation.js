const Joi = require("joi");

const createCurriculumValidationSchema = Joi.object({
  title: Joi.string().required(),

  description: Joi.string().required(),

  course: Joi.string().required(),
});

module.exports = {
  createCurriculumValidationSchema,
};
