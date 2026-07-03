const Joi = require("joi");

/* Create */

const createInstructorValidationSchema = Joi.object({
  user: Joi.string().required(),

  specialization: Joi.string().valid().trim().optional(),

  salaryType: Joi.string()
    .valid("monthly", "percentage", "perClass")
    .optional(),

  salary: Joi.object({
    monthlyAmount: Joi.number().allow(null),

    percentage: Joi.number().allow(null),

    classAmount: Joi.number().allow(null),
  }).optional(),

  isActive: Joi.boolean().optional(),
});

/* Update */

const updateInstructorValidationSchema = Joi.object({
  specialization: Joi.string().valid().trim().optional(),

  salaryType: Joi.string()
    .valid("monthly", "percentage", "perClass")
    .optional(),

  salary: Joi.object({
    monthlyAmount: Joi.number().allow(null),

    percentage: Joi.number().allow(null),

    classAmount: Joi.number().allow(null),
  }).optional(),

  isActive: Joi.boolean().optional(),

  assignedClasses: Joi.array().items(Joi.string()).optional(),
});

module.exports = {
  createInstructorValidationSchema,
  updateInstructorValidationSchema,
};
