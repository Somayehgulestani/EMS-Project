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
  const result = await Notification.findByIdAndUpdate(
    id,
    {
      isRead: true,
    },
    {
      new: true,
    },
  );

  return result;
};

module.exports = {
  createNotification,
  getMyNotifications,
  markAsRead,
};
