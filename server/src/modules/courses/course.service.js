const Course = require("./course.model");

const createCourse = async (payload) => {
  const result = await Course.create(payload);

  return result;
};

const getAllCourses = async () => {
  const result = await Course.find();

  return result;
};

const getSingleCourse = async (id) => {
  const result = await Course.findById(id);

  return result;
};

const updateCourse = async (id, payload) => {
  const result = await Course.findByIdAndUpdate(id, payload, {
    new: true,
  });

  return result;
};

const deleteCourse = async (id) => {
  const result = await Course.findByIdAndDelete(id);

  return result;
};

module.exports = {
  createCourse,
  getAllCourses,
  getSingleCourse,
  updateCourse,
  deleteCourse,
};
