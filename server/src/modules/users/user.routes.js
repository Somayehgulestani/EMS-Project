const express = require("express");

const userController = require("./user.controller");

const auth = require("../../middlewares/auth.middleware");

const validateRequest = require("../../middlewares/validate.middlewares");

const {
  updateUserRoleValidation,
  updateUserStatusValidation,
} = require("./user.validation");

const router = express.Router();

/*
   Get All Users */

router.get("/", auth("admin"), userController.getAllUsers);

/*
   Get Single User */

router.get("/:id", auth("admin"), userController.getSingleUser);

/*
   Update User Role */

router.patch(
  "/:id/role",
  auth("admin"),
  validateRequest(updateUserRoleValidation),
  userController.updateUserRole,
);

/*
   Update User Status */

router.patch(
  "/:id/status",
  auth("admin"),
  validateRequest(updateUserStatusValidation),
  userController.updateUserStatus,
);

/*
   Delete User */

router.delete("/:id", auth("admin"), userController.deleteUser);

module.exports = router;
