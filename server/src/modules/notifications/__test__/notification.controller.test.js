const express = require("express");
const request = require("supertest");
const notificationController = require("../notification.controller");
const notificationService = require("../notification.service");

// شبیه‌سازی متدهای سرویس برای تست کنترلر
jest.mock("../notification.service");

const app = express();
app.use(express.json());

// میان‌افزار فرضی برای شبیه‌سازی کاربر لاگین شده
const mockAuthMiddleware = (req, res, next) => {
  req.user = { id: "mockUser123" };
  next();
};

// تعریف مسیرهای تست اکسپرس
app.post("/notifications", notificationController.createNotification);
app.get(
  "/notifications/my",
  mockAuthMiddleware,
  notificationController.getMyNotifications,
);
app.patch("/notifications/:id/read", notificationController.markAsRead);

describe("تست‌های اختصاصی Notification Controller (تست API)", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("POST /notifications باید وضعیت 201 برگرداند", async () => {
    notificationService.createNotification.mockResolvedValue({ title: "Test" });

    const response = await request(app)
      .post("/notifications")
      .send({ title: "Test" });

    expect(response.status).toBe(201);
    expect(response.body.success).toBe(true);
  });

  test("GET /notifications/my باید وضعیت 200 و اعلانات کاربر را بدهد", async () => {
    notificationService.getMyNotifications.mockResolvedValue([]);

    const response = await request(app).get("/notifications/my");

    expect(response.status).toBe(200);
    expect(response.body.data).toBeInstanceOf(Array);
  });

  test("PATCH /notifications/:id/read باید وضعیت 200 بدهد", async () => {
    notificationService.markAsRead.mockResolvedValue({ id: "1", isRead: true });

    const response = await request(app).patch("/notifications/1/read");

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
  });
});
