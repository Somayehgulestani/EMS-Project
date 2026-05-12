const courseService = require("./course.service");

const createCourse = async (req, res) => {
  try {
    const result = await courseService.createCourse(req.body);

    res.status(201).json({
      success: true,
      message: "Course created successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllCourses = async (req, res) => {
  try {
    const result = await courseService.getAllCourses();

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

const getSingleCourse = async (req, res) => {
  try {
    const result = await courseService.getSingleCourse(req.params.id);

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

const updateCourse = async (req, res) => {
  try {
    const result = await courseService.updateCourse(req.params.id, req.body);

    res.status(200).json({
      success: true,
      message: "Course updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteCourse = async (req, res) => {
  try {
    const result = await courseService.deleteCourse(req.params.id);

    res.status(200).json({
      success: true,
      message: "Course deleted successfully",
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
  createCourse,
  getAllCourses,
  getSingleCourse,
  updateCourse,
  deleteCourse,
};
