const financeService = require("./finance.service");

const catchAsync = require("../../utils/catchAsync");

const createFinanceRecord = catchAsync(async (req, res) => {
  const result = await financeService.createFinanceRecord(req.body);

  res.status(201).json({
    success: true,
    message: "Finance record created successfully",
    data: result,
  });
});

const getAllFinanceRecords = catchAsync(async (req, res) => {
  const result = await financeService.getAllFinanceRecords();

  res.status(200).json({
    success: true,
    data: result,
  });
});

const getSingleFinanceRecord = catchAsync(async (req, res) => {
  const result = await financeService.getSingleFinanceRecord(req.params.id);

  res.status(200).json({
    success: true,
    data: result,
  });
});

const addInstallment = catchAsync(async (req, res) => {
  const result = await financeService.addInstallment(req.params.id, req.body);

  res.status(200).json({
    success: true,
    message: "Installment added successfully",
    data: result,
  });
});

module.exports = {
  createFinanceRecord,
  getAllFinanceRecords,
  getSingleFinanceRecord,
  addInstallment,
};
