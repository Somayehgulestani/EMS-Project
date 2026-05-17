const courseService = require("./course.service");
const catchAsync = require("../../utils/catchAsync");

const createCourse = catchAsync(async (req, res) => {
  const result = await courseService.createCourse(req.body);

  res.status(201).json({
    success: true,
    message: "Course created successfully",
    data: result,
  });
});

const getAllCourses = catchAsync(async (req, res) => {
  const result = await courseService.getAllCourses();

  res.status(200).json({
    success: true,
    data: result,
  });
});

const getSingleCourse = catchAsync(async (req, res) => {
  const result = await courseService.getSingleCourse(req.params.id);

  res.status(200).json({
    success: true,
    data: result,
  });
});

const updateCourse = catchAsync(async (req, res) => {
  const result = await courseService.updateCourse(req.params.id, req.body);

  res.status(200).json({
    success: true,
    message: "Course updated successfully",
    data: result,
  });
});

const deleteCourse = catchAsync(async (req, res) => {
  const result = await courseService.deleteCourse(req.params.id);

  res.status(200).json({
    success: true,
    message: "Course deleted successfully",
    data: result,
  });
});

module.exports = {
  createCourse,
  getAllCourses,
  getSingleCourse,
  updateCourse,
  deleteCourse,
};
