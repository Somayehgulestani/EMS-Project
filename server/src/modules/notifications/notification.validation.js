const Joi = require("joi");

const createNotificationValidationSchema = Joi.object({
  user: Joi.string().required(),

  title: Joi.string().required(),

  message: Joi.string().required(),
});

module.exports = {
  createNotificationValidationSchema,
};
