const express = require("express");
const request = require("supertest");
const authController = require("../auth.controller");
const authService = require("../auth.service");

// شبیه‌سازی کردن متدهای سرویس تا کنترلر را به صورت ایزوله تست کنیم
jest.mock("../auth.service");

// ساخت یک اپلیکیشن اکسپرس فرضی برای تست مسیرها
const app = express();
app.use(express.json());
app.post("/register", authController.register);
app.post("/login", authController.login);

describe("تست‌های اختصاصی Auth Controller (تست API)", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("POST /register", () => {
    test("باید در صورت موفقیت وضعیت 201 و پیام موفقیت برگرداند", async () => {
      const mockUserData = {
        id: "user_1",
        fullName: "Ali",
        email: "ali@test.com",
      };
      authService.registerUser.mockResolvedValue(mockUserData);

      const response = await request(app)
        .post("/register")
        .send({ fullName: "Ali", email: "ali@test.com", password: "123" });

      expect(response.status).toBe(201);
      expect(response.body).toEqual({
        success: true,
        message: "User registered successfully",
        data: mockUserData,
      });
    });
  });

  describe("POST /login", () => {
    test("باید در صورت ورود موفقیت‌آمیز وضعیت 200 برگرداند", async () => {
      const mockLoginResult = {
        token: "abc_token",
        user: { email: "ali@test.com" },
      };
      authService.loginUser.mockResolvedValue(mockLoginResult);

      const response = await request(app)
        .post("/login")
        .send({ email: "ali@test.com", password: "123" });

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.message).toBe("Login successful");
      expect(response.body.data.token).toBe("abc_token");
    });
  });
});
