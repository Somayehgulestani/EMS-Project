const Notification = require("./notification.model");

const createNotification = async (payload) => {
  const result = await Notification.create(payload);

  return result;
};

const getMyNotifications = async (userId) => {
  const result = await Notification.find({
    receiver: userId,
  })
    .populate("sender")
    .sort({ createdAt: -1 });

  return result;
};

const markAsRead = async (id) => {
  const notification = await Notification.findById(id);

  if (!notification) {
    throw new Error("Notification not found");
  }

  notification.isRead = true;

  await notification.save();

  return notification;
};

module.exports = {
  createNotification,
  getMyNotifications,
  markAsRead,
};
