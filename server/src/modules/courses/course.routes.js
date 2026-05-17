const express = require("express");

const courseController = require("./course.controller");

const auth = require("../../middlewares/auth.middleware");

const validateRequest = require("../../middlewares/validate.middlewares");

const { createCourseValidationSchema } = require("./course.validation");

const router = express.Router();

router.post(
  "/",
  auth("admin"),
  validateRequest(createCourseValidationSchema),
  courseController.createCourse,
);

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

router.patch(
  "/:id",
  auth("admin"),
  validateRequest(createCourseValidationSchema),
  courseController.updateCourse,
);

router.delete("/:id", auth("admin"), courseController.deleteCourse);

module.exports = router;
