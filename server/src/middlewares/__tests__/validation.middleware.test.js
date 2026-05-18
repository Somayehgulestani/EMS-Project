const validateRequest = require("../../middlewares/validate.middlewares"); // آدرس فایل را چک کنید

describe("تست‌های اختصاصی Validation Middleware", () => {
  let req, res, next, mockSchema;

  beforeEach(() => {
    jest.clearAllMocks();

    req = { body: { email: "test@test.com" } };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
    next = jest.fn();

    // ساخت یک اسکیمای فرضی شبیه‌سازی‌شده (Mock)
    mockSchema = {
      validate: jest.fn(),
    };
  });

  test("اگر ورودی نامعتبر باشد، باید وضعیت 400 و پیام ارور اسکیما را برگرداند", () => {
    // شبیه‌سازی ساختار ارور Joi
    const mockError = {
      error: {
        details: [{ message: '"email" is required' }],
      },
    };
    mockSchema.validate.mockReturnValue(mockError);

    // اجرای میان‌افزار با اسکیمای فرضی
    validateRequest(mockSchema)(req, res, next);

    expect(mockSchema.validate).toHaveBeenCalledWith(req.body);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      message: '"email" is required',
    });
    expect(next).not.toHaveBeenCalled(); // نباید به مرحله بعدی برود
  });

  test("اگر ورودی معتبر باشد، باید بدون ارور متد next را صدا بزند", () => {
    // شبیه‌سازی حالت بدون ارور (دیتای کاملاً درست)
    mockSchema.validate.mockReturnValue({ error: null });

    validateRequest(mockSchema)(req, res, next);

    expect(mockSchema.validate).toHaveBeenCalledWith(req.body);
    expect(next).toHaveBeenCalled(); // با موفقیت به کنترلر پاس داده می‌شود
    expect(res.status).not.toHaveBeenCalled();
  });
});
