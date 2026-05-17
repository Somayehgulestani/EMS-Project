const studentService = require("./student.service");
const catchAsync = require("../../utils/catchAsync");

const createStudent = catchAsync(async (req, res) => {
  const result = await studentService.createStudent(req.body);

  res.status(201).json({
    success: true,
    message: "Student created successfully",
    data: result,
  });
});

const getAllStudents = catchAsync(async (req, res) => {
  const result = await studentService.getAllStudents(req.query);

  res.status(200).json({
    success: true,
    data: result,
  });
});

const getSingleStudent = catchAsync(async (req, res) => {
  const result = await studentService.getSingleStudent(req.params.id);

  res.status(200).json({
    success: true,
    data: result,
  });
});

const updateStudent = catchAsync(async (req, res) => {
  const result = await studentService.updateStudent(req.params.id, req.body);

  res.status(200).json({
    success: true,
    message: "Student updated successfully",
    data: result,
  });
});

const deleteStudent = catchAsync(async (req, res) => {
  const result = await studentService.deleteStudent(req.params.id);

  res.status(200).json({
    success: true,
    message: "Student deleted successfully",
    data: result,
  });
});

module.exports = {
  createStudent,
  getAllStudents,
  getSingleStudent,
  updateStudent,
  deleteStudent,
};
