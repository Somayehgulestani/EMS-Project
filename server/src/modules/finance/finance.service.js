const Finance = require("./finance.model");

const createFinanceRecord = async (payload) => {
  payload.totalFee = Number(payload.totalFee);

  payload.paidAmount = Number(payload.paidAmount || 0);

  payload.discount = Number(payload.discount || 0);

  payload.dueAmount = payload.totalFee - payload.paidAmount - payload.discount;

  // payment status logic
  if (payload.dueAmount <= 0) {
    payload.paymentStatus = "paid";
  } else if (payload.paidAmount > 0) {
    payload.paymentStatus = "partial";
  } else {
    payload.paymentStatus = "unpaid";
  }

  const result = await Finance.create(payload);

  return result;
};

const getAllFinanceRecords = async () => {
  const result = await Finance.find().populate("student").populate("course");

  return result;
};

const getSingleFinanceRecord = async (id) => {
  const result = await Finance.findById(id)
    .populate("student")
    .populate("course");

  return result;
};

const addInstallment = async (id, installmentData) => {
  const finance = await Finance.findById(id);

  if (!finance) {
    throw new Error("Finance record not found");
  }

  finance.installments.push(installmentData);

  finance.paidAmount += Number(installmentData.amount);

  finance.dueAmount = finance.totalFee - finance.paidAmount - finance.discount;

  // update payment status
  if (finance.dueAmount <= 0) {
    finance.paymentStatus = "paid";
  } else {
    finance.paymentStatus = "partial";
  }

  await finance.save();

  return finance;
};

module.exports = {
  createFinanceRecord,
  getAllFinanceRecords,
  getSingleFinanceRecord,
  addInstallment,
};
