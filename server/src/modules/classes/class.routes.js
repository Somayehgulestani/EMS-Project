const express = require("express");

const classController = require("./class.controller");

const auth = require("../../middlewares/auth.middleware");

const router = express.Router();

router.post("/", auth("admin"), classController.createClass);

router.get("/", auth("admin", "instructor"), classController.getAllClasses);

router.get("/:id", auth("admin", "instructor"), classController.getSingleClass);

router.patch("/:id", auth("admin"), classController.updateClass);

router.delete("/:id", auth("admin"), classController.deleteClass);

module.exports = router;
