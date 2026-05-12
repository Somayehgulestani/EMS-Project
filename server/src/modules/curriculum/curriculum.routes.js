const express = require("express");

const curriculumController = require("./curriculum.controller");

const auth = require("../../middlewares/auth.middleware");

const router = express.Router();

router.post("/", auth("admin"), curriculumController.createCurriculum);

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

router.patch("/:id", auth("admin"), curriculumController.updateCurriculum);

router.delete("/:id", auth("admin"), curriculumController.deleteCurriculum);

module.exports = router;
