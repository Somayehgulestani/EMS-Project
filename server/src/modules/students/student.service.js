const Student = require("./student.model");

const createStudent = async (payload) => {
  const result = await Student.create(payload);

  return result;
};

const getAllStudents = async () => {
  const result = await Student.find().populate("user");

  return result;
};

const getSingleStudent = async (id) => {
  const result = await Student.findById(id).populate("user");

  return result;
};

const updateStudent = async (id, payload) => {
  const result = await Student.findByIdAndUpdate(id, payload, {
    new: true,
  });

  return result;
};

const deleteStudent = async (id) => {
  const result = await Student.findByIdAndDelete(id);

  return result;
};

module.exports = {
  createStudent,
  getAllStudents,
  getSingleStudent,
  updateStudent,
  deleteStudent,
};
