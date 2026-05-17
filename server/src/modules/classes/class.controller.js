const classService = require("./class.service");

const catchAsync = require("../../utils/catchAsync");

const createClass = catchAsync(async (req, res) => {
  const result = await classService.createClass(req.body);

  res.status(201).json({
    success: true,
    message: "Class created successfully",
    data: result,
  });
});

const getAllClasses = catchAsync(async (req, res) => {
  const result = await classService.getAllClasses();

  res.status(200).json({
    success: true,
    data: result,
  });
});

const getSingleClass = catchAsync(async (req, res) => {
  const result = await classService.getSingleClass(req.params.id);

  res.status(200).json({
    success: true,
    data: result,
  });
});

const updateClass = catchAsync(async (req, res) => {
  const result = await classService.updateClass(req.params.id, req.body);

  res.status(200).json({
    success: true,
    message: "Class updated successfully",
    data: result,
  });
});

const deleteClass = catchAsync(async (req, res) => {
  const result = await classService.deleteClass(req.params.id);

  res.status(200).json({
    success: true,
    message: "Class deleted successfully",
    data: result,
  });
});

const assignInstructor = catchAsync(async (req, res) => {
  const result = await classService.assignInstructor(
    req.params.id,
    req.body.instructorId,
  );

  res.status(200).json({
    success: true,
    message: "Instructor assigned successfully",
    data: result,
  });
});

module.exports = {
  createClass,
  getAllClasses,
  getSingleClass,
  updateClass,
  deleteClass,
  assignInstructor,
};
