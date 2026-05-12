const express = require("express");

const courseController = require("./course.controller");

const auth = require("../../middlewares/auth.middleware");

const router = express.Router();

router.post("/", auth("admin"), courseController.createCourse);

router.get(
  "/",
  auth("admin", "student", "instructor"),
  courseController.getAllCourses,
);

router.get(
  "/:id",
  auth("admin", "student", "instructor"),
  courseController.getSingleCourse,
);

router.patch("/:id", auth("admin"), courseController.updateCourse);

router.delete("/:id", auth("admin"), courseController.deleteCourse);

module.exports = router;
