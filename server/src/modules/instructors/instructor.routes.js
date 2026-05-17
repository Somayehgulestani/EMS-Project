const express = require("express");

const instructorController = require("./instructor.controller");

const auth = require("../../middlewares/auth.middleware");

const validateRequest = require("../../middlewares/validate.middlewares");

const { createInstructorValidationSchema } = require("./instructor.validation");

const router = express.Router();

router.post(
  "/",
  auth("admin"),
  validateRequest(createInstructorValidationSchema),
  instructorController.createInstructor,
);

router.get(
  "/",
  auth("admin", "instructor"),
  instructorController.getAllInstructors,
);

router.get(
  "/:id",
  auth("admin", "instructor"),
  instructorController.getSingleInstructor,
);

module.exports = router;
