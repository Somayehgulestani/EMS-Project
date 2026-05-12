const curriculumService = require("./curriculum.service");

const createCurriculum = async (req, res) => {
  try {
    const result = await curriculumService.createCurriculum(req.body);

    res.status(201).json({
      success: true,
      message: "Curriculum created successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllCurriculums = async (req, res) => {
  try {
    const result = await curriculumService.getAllCurriculums();

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

const getSingleCurriculum = async (req, res) => {
  try {
    const result = await curriculumService.getSingleCurriculum(req.params.id);

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

const updateCurriculum = async (req, res) => {
  try {
    const result = await curriculumService.updateCurriculum(
      req.params.id,
      req.body,
    );

    res.status(200).json({
      success: true,
      message: "Curriculum updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteCurriculum = async (req, res) => {
  try {
    const result = await curriculumService.deleteCurriculum(req.params.id);

    res.status(200).json({
      success: true,
      message: "Curriculum deleted successfully",
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
  createCurriculum,
  getAllCurriculums,
  getSingleCurriculum,
  updateCurriculum,
  deleteCurriculum,
};
