const Joi = require("joi");

const createFinanceValidationSchema = Joi.object({
  student: Joi.string().required(),

  totalAmount: Joi.number().required(),

  paidAmount: Joi.number(),

  dueAmount: Joi.number(),

  paymentStatus: Joi.string().valid("paid", "partial", "unpaid"),
});

const installmentValidationSchema = Joi.object({
  amount: Joi.number().required(),

  paymentDate: Joi.date(),
});

module.exports = {
  createFinanceValidationSchema,
  installmentValidationSchema,
};
