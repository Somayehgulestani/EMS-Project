const financeService = require("./finance.service");

const createFinanceRecord = async (req, res) => {
  try {
    const result = await financeService.createFinanceRecord(req.body);

    res.status(201).json({
      success: true,
      message: "Finance record created successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllFinanceRecords = async (req, res) => {
  try {
    const result = await financeService.getAllFinanceRecords();

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getSingleFinanceRecord = async (req, res) => {
  try {
    const result = await financeService.getSingleFinanceRecord(req.params.id);

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const addInstallment = async (req, res) => {
  try {
    const result = await financeService.addInstallment(req.params.id, req.body);

    res.status(200).json({
      success: true,
      message: "Installment added successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createFinanceRecord,
  getAllFinanceRecords,
  getSingleFinanceRecord,
  addInstallment,
};
