const Class = require("./class.model");

const createClass = async (payload) => {
  const result = await Class.create(payload);

  return result;
};

const getAllClasses = async () => {
  const result = await Class.find()
    .populate("course")
    .populate("instructor")
    .populate("students");

  return result;
};

const getSingleClass = async (id) => {
  const result = await Class.findById(id)
    .populate("course")
    .populate("instructor")
    .populate("students");

  return result;
};

const updateClass = async (id, payload) => {
  const result = await Class.findByIdAndUpdate(id, payload, {
    new: true,
  });

  return result;
};

const deleteClass = async (id) => {
  const result = await Class.findByIdAndDelete(id);

  return result;
};

module.exports = {
  createClass,
  getAllClasses,
  getSingleClass,
  updateClass,
  deleteClass,
};
