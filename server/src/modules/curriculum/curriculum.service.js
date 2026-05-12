const Curriculum = require("./curriculum.model");

const createCurriculum = async (payload) => {
  const result = await Curriculum.create(payload);

  return result;
};

const getAllCurriculums = async () => {
  const result = await Curriculum.find().populate("course");

  return result;
};

const getSingleCurriculum = async (id) => {
  const result = await Curriculum.findById(id).populate("course");

  return result;
};

const updateCurriculum = async (id, payload) => {
  const result = await Curriculum.findByIdAndUpdate(id, payload, {
    new: true,
  });

  return result;
};

const deleteCurriculum = async (id) => {
  const result = await Curriculum.findByIdAndDelete(id);

  return result;
};

module.exports = {
  createCurriculum,
  getAllCurriculums,
  getSingleCurriculum,
  updateCurriculum,
  deleteCurriculum,
};
