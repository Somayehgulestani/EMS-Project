const classService = require("./class.service");

const createClass = async (req, res) => {
  try {
    const result = await classService.createClass(req.body);

    res.status(201).json({
      success: true,
      message: "Class created successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllClasses = async (req, res) => {
  try {
    const result = await classService.getAllClasses();

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

const getSingleClass = async (req, res) => {
  try {
    const result = await classService.getSingleClass(req.params.id);

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

const updateClass = async (req, res) => {
  try {
    const result = await classService.updateClass(req.params.id, req.body);

    res.status(200).json({
      success: true,
      message: "Class updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteClass = async (req, res) => {
  try {
    const result = await classService.deleteClass(req.params.id);

    res.status(200).json({
      success: true,
      message: "Class deleted successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createClass,
  getAllClasses,
  getSingleClass,
  updateClass,
  deleteClass,
};
