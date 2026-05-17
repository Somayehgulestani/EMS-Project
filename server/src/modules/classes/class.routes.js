const express = require("express");

const classController = require("./class.controller");

const auth = require("../../middlewares/auth.middleware");

const validateRequest = require("../../middlewares/validate.middlewares");

const { createClassValidationSchema } = require("./class.validation");

const router = express.Router();

router.post(
  "/",
  auth("admin"),
  validateRequest(createClassValidationSchema),
  classController.createClass,
);

router.get("/", auth("admin", "instructor"), classController.getAllClasses);

router.get("/:id", auth("admin", "instructor"), classController.getSingleClass);

router.patch(
  "/:id",
  auth("admin"),
  validateRequest(createClassValidationSchema),
  classController.updateClass,
);

router.delete("/:id", auth("admin"), classController.deleteClass);

router.patch(
  "/assign-instructor/:id",
  auth("admin"),
  classController.assignInstructor,
);

module.exports = router;
