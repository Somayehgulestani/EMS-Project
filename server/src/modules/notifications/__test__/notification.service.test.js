const notificationService = require("../notification.service");
const Notification = require("../notification.model");

// شبیه‌سازی مدل مونگوز اعلانات
jest.mock("../notification.model");

describe("تست‌های اختصاصی Notification Service", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("متد createNotification باید یک اعلان جدید بسازد", async () => {
    const payload = { title: "خوش آمدید", message: "متن تست" };
    Notification.create.mockResolvedValue(payload);

    const result = await notificationService.createNotification(payload);
    expect(Notification.create).toHaveBeenCalledWith(payload);
    expect(result.title).toBe("خوش آمدید");
  });

  test("متد getMyNotifications باید اعلانات کاربر را با پاپولیت و سورت برگرداند", async () => {
    // شبیه‌سازی زنجیره کامل: .find().populate().sort()
    const mockSort = jest.fn().mockResolvedValue([{ title: "اعلان ۱" }]);
    const mockPopulate = jest.fn().mockReturnValue({ sort: mockSort });
    Notification.find.mockReturnValue({ populate: mockPopulate });

    const result = await notificationService.getMyNotifications("userId123");

    expect(Notification.find).toHaveBeenCalledWith({ receiver: "userId123" });
    expect(mockPopulate).toHaveBeenCalledWith("sender");
    expect(mockSort).toHaveBeenCalledWith({ createdAt: -1 });
    expect(result).toBeInstanceOf(Array);
  });

  describe("متد markAsRead", () => {
    test("باید وضعیت خوانده شدن اعلان را true کرده و ذخیره کند", async () => {
      const mockNotificationInstance = {
        _id: "notif123",
        isRead: false,
        save: jest.fn().mockResolvedValue(true),
      };
      Notification.findById.mockResolvedValue(mockNotificationInstance);

      const result = await notificationService.markAsRead("notif123");

      expect(Notification.findById).toHaveBeenCalledWith("notif123");
      expect(result.isRead).toBe(true);
      expect(mockNotificationInstance.save).toHaveBeenCalled();
    });

    test("اگر اعلان پیدا نشود باید ارور مناسب بدهد", async () => {
      Notification.findById.mockResolvedValue(null);
      await expect(notificationService.markAsRead("wrong_id")).rejects.toThrow(
        "Notification not found",
      );
    });
  });
});
