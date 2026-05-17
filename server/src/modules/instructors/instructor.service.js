const Instructor = require("./instructor.model");

const createInstructor = async (payload) => {
  const result = await Instructor.create(payload);

  return result;
};

const getAllInstructors = async () => {
  const result = await Instructor.find()
    .populate("user")
    .populate("assignedClasses");

  return result;
};

const getSingleInstructor = async (id) => {
  const result = await Instructor.findById(id)
    .populate("user")
    .populate("assignedClasses");

  return result;
};

module.exports = {
  createInstructor,
  getAllInstructors,
  getSingleInstructor,
};
