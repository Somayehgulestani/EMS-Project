const express = require("express");

const curriculumController = require("./curriculum.controller");

const auth = require("../../middlewares/auth.middleware");

const validateRequest = require("../../middlewares/validate.middlewares");

const { createCurriculumValidationSchema } = require("./curriculum.validation");

const router = express.Router();

router.post(
  "/",
  auth("admin"),
  validateRequest(createCurriculumValidationSchema),
  curriculumController.createCurriculum,
);

router.get(
  "/",
  auth("admin", "instructor"),
  curriculumController.getAllCurriculums,
);

router.get(
  "/:id",
  auth("admin", "instructor"),
  curriculumController.getSingleCurriculum,
);

router.patch(
  "/:id",
  auth("admin"),
  validateRequest(createCurriculumValidationSchema),
  curriculumController.updateCurriculum,
);

router.delete("/:id", auth("admin"), curriculumController.deleteCurriculum);

module.exports = router;
