const notificationService = require("./notification.service");
const catchAsync = require("../../utils/catchAsync");

const createNotification = catchAsync(async (req, res) => {
  const result = await notificationService.createNotification(req.body);

  res.status(201).json({
    success: true,
    data: result,
  });
});

const getMyNotifications = catchAsync(async (req, res) => {
  const result = await notificationService.getMyNotifications(req.user.id);

  res.status(200).json({
    success: true,
    data: result,
  });
});

const markAsRead = catchAsync(async (req, res) => {
  const result = await notificationService.markAsRead(req.params.id);

  res.status(200).json({
    success: true,
    data: result,
  });
});

module.exports = {
  createNotification,
  getMyNotifications,
  markAsRead,
};
