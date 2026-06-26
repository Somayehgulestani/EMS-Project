const express = require("express");

const instructorController = require("./instructor.controller");

const auth = require("../../middlewares/auth.middleware");

const validateRequest = require("../../middlewares/validate.middlewares");

const {
  createInstructorValidationSchema,
  updateInstructorValidationSchema,
} = require("./instructor.validation");

const router = express.Router();

// /* Internal */

router.post(
  "/",
  auth("admin"),
  validateRequest(createInstructorValidationSchema),
  instructorController.createInstructor,
);

/* List */

router.get("/", auth("admin"), instructorController.getAllInstructors);

/* Single */

router.get("/:id", auth("admin"), instructorController.getSingleInstructor);

/* Update */

router.patch(
  "/:id",
  auth("admin"),
  validateRequest(updateInstructorValidationSchema),
  instructorController.updateInstructor,
);

/* Delete */

router.delete("/:id", auth("admin"), instructorController.deleteInstructor);

module.exports = router;
