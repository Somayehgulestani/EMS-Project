const curriculumService = require("./curriculum.service");

const catchAsync = require("../../utils/catchAsync");

const createCurriculum = catchAsync(async (req, res) => {
  const result = await curriculumService.createCurriculum(req.body);

  res.status(201).json({
    success: true,
    message: "Curriculum created successfully",
    data: result,
  });
});

const getAllCurriculums = catchAsync(async (req, res) => {
  const result = await curriculumService.getAllCurriculums();

  res.status(200).json({
    success: true,
    data: result,
  });
});

const getSingleCurriculum = catchAsync(async (req, res) => {
  const result = await curriculumService.getSingleCurriculum(req.params.id);
  console.log(req.params.id);
  res.status(200).json({
    success: true,
    data: result,
  });
});

const updateCurriculum = catchAsync(async (req, res) => {
  const result = await curriculumService.updateCurriculum(
    req.params.id,
    req.body,
  );

  res.status(200).json({
    success: true,
    message: "Curriculum updated successfully",
    data: result,
  });
});

const deleteCurriculum = catchAsync(async (req, res) => {
  const result = await curriculumService.deleteCurriculum(req.params.id);

  res.status(200).json({
    success: true,
    message: "Curriculum deleted successfully",
    data: result,
  });
});

module.exports = {
  createCurriculum,
  getAllCurriculums,
  getSingleCurriculum,
  updateCurriculum,
  deleteCurriculum,
};
