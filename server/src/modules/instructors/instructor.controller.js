const instructorService = require("./instructor.service");
const catchAsync = require("../../utils/catchAsync");

/* Create */

const createInstructor = catchAsync(async (req, res) => {
  const result = await instructorService.createInstructor(req.body);

  res.status(201).json({
    success: true,
    message: "Instructor created successfully",
    data: result,
  });
});

/* Get All */

const getAllInstructors = catchAsync(async (req, res) => {
  const result = await instructorService.getAllInstructors(req.query);

  res.status(200).json({
    success: true,
    data: result,
  });
});

/* Get Single */

const getSingleInstructor = catchAsync(async (req, res) => {
  const result = await instructorService.getSingleInstructor(req.params.id);

  res.status(200).json({
    success: true,
    data: result,
  });
});

/* Update */

const updateInstructor = catchAsync(async (req, res) => {
  const result = await instructorService.updateInstructor(
    req.params.id,
    req.body,
  );

  res.status(200).json({
    success: true,
    message: "Instructor updated successfully",
    data: result,
  });
});

/* Delete */

const deleteInstructor = catchAsync(async (req, res) => {
  await instructorService.deleteInstructor(req.params.id);

  res.status(200).json({
    success: true,
    message: "Instructor deleted successfully",
  });
});

module.exports = {
  createInstructor,
  getAllInstructors,
  getSingleInstructor,
  updateInstructor,
  deleteInstructor,
};
