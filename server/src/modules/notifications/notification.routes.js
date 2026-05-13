const express = require("express");

const notificationController = require("./notification.controller");

const auth = require("../../middlewares/auth.middleware");

const router = express.Router();

router.post(
  "/",
  auth("admin", "instructor"),
  notificationController.createNotification,
);

router.get(
  "/my-notifications",
  auth("admin", "instructor", "student"),
  notificationController.getMyNotifications,
);

router.patch(
  "/read/:id",
  auth("admin", "instructor", "student"),
  notificationController.markAsRead,
);

module.exports = router;
