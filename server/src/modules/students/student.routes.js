const express = require("express");

const studentController = require("./student.controller");

const auth = require("../../middlewares/auth.middleware");

const validateRequest = require("../../middlewares/validate.middlewares");

const { createStudentValidationSchema } = require("./student.validation");

const router = express.Router();

router.post(
  "/",
  auth("admin"),
  validateRequest(createStudentValidationSchema),
  studentController.createStudent,
);

router.get("/", auth("admin"), studentController.getAllStudents);

router.get("/:id", auth("admin"), studentController.getSingleStudent);

router.patch(
  "/:id",
  auth("admin"),
  validateRequest(createStudentValidationSchema),
  studentController.updateStudent,
);

router.delete("/:id", auth("admin"), studentController.deleteStudent);

module.exports = router;
