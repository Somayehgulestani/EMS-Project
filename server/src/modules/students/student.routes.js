const express = require("express");

const studentController = require("./student.controller");

const auth = require("../../middlewares/auth.middleware");

const router = express.Router();

router.post("/", auth("admin"), studentController.createStudent);

router.get("/", auth("admin"), studentController.getAllStudents);

router.get("/:id", auth("admin"), studentController.getSingleStudent);

router.patch("/:id", auth("admin"), studentController.updateStudent);

router.delete("/:id", auth("admin"), studentController.deleteStudent);

module.exports = router;
