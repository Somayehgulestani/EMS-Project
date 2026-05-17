const express = require("express");

const notificationController = require("./notification.controller");

const auth = require("../../middlewares/auth.middleware");

const validateRequest = require("../../middlewares/validate.middlewares");

const {
  createNotificationValidationSchema,
} = require("./notification.validation");

const router = express.Router();

router.post(
  "/",
  auth("admin", "instructor"),
  validateRequest(createNotificationValidationSchema),
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
