const instructorService = require("./instructor.service");

const catchAsync = require("../../utils/catchAsync");

const createInstructor = catchAsync(async (req, res) => {
  const result = await instructorService.createInstructor(req.body);

  res.status(201).json({
    success: true,
    message: "Instructor created successfully",
    data: result,
  });
});

const getAllInstructors = catchAsync(async (req, res) => {
  const result = await instructorService.getAllInstructors();

  res.status(200).json({
    success: true,
    data: result,
  });
});

const getSingleInstructor = catchAsync(async (req, res) => {
  const result = await instructorService.getSingleInstructor(req.params.id);

  res.status(200).json({
    success: true,
    data: result,
  });
});

module.exports = {
  createInstructor,
  getAllInstructors,
  getSingleInstructor,
};
