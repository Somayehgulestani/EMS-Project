const authService = require("../auth.service");
const User = require("../../users/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// شبیه‌سازی ماژول‌ها برای جلوگیری از تغییر در دیتابیس واقعی
jest.mock("../../users/user.model");
jest.mock("bcryptjs");
jest.mock("jsonwebtoken");

describe("تست‌های اختصاصی Auth Service", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    process.env.JWT_SECRET = "test_secret";
  });

  describe("متد registerUser", () => {
    test("باید کاربر جدید را با موفقیت ثبت‌نام کند", async () => {
      const payload = {
        fullName: "Ali",
        email: "ali@test.com",
        password: "123",
        role: "user",
      };

      User.findOne.mockResolvedValue(null);
      bcrypt.hash.mockResolvedValue("hashed_123");
      User.create.mockResolvedValue({
        id: "id_1",
        ...payload,
        password: "hashed_123",
      });

      const result = await authService.registerUser(payload);

      expect(User.findOne).toHaveBeenCalledWith({ email: "ali@test.com" });
      expect(User.create).toHaveBeenCalled();
      expect(result.fullName).toBe("Ali");
    });

    test("اگر ایمیل تکراری باشد باید ارور بدهد", async () => {
      User.findOne.mockResolvedValue({ email: "ali@test.com" });
      await expect(
        authService.registerUser({ email: "ali@test.com" }),
      ).rejects.toThrow("User already exists");
    });
  });

  describe("متد loginUser", () => {
    test("باید با اطلاعات درست وارد شده و توکن برگرداند", async () => {
      const mockSelect = jest.fn().mockResolvedValue({
        _id: "id_1",
        email: "ali@test.com",
        password: "hashed_password",
        role: "user",
      });
      User.findOne.mockReturnValue({ select: mockSelect });
      bcrypt.compare.mockResolvedValue(true);
      jwt.sign.mockReturnValue("mock_token");

      const result = await authService.loginUser({
        email: "ali@test.com",
        password: "123",
      });

      expect(result).toHaveProperty("token");
      expect(result.token).toBe("mock_token");
    });
  });
});
