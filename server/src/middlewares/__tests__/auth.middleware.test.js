const auth = require("../auth.middleware"); // آدرس دقیق فایل را چک کنید
const jwt = require("jsonwebtoken");

// شبیه‌سازی ماژول jsonwebtoken
jest.mock("jsonwebtoken");

describe("تست‌های اختصاصی Auth Middleware", () => {
  let req, res, next;

  beforeEach(() => {
    jest.clearAllMocks();
    process.env.JWT_SECRET = "test_secret";

    // ساخت شیء‌های فرضی req، res و next برای هر تست
    req = {
      headers: {},
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
    next = jest.fn();
  });

  test("اگر توکن ارسال نشده باشد، باید وضعیت 401 و پیام Unauthorized برگرداند", () => {
    // اجرای میان‌افزار بدون ست کردن توکن در هدر
    auth()(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      message: "Unauthorized access",
    });
    expect(next).not.toHaveBeenCalled(); // نباید به مرحله بعد برود
  });

  test("اگر توکن نامعتبر یا منقضی باشد، باید وضعیت 401 و پیام Invalid token برگرداند", () => {
    req.headers.authorization = "invalid_token_abc";

    // شبیه‌سازی ارور دادن متد verify هنگام بررسی توکن خراب
    jwt.verify.mockImplementation(() => {
      throw new Error("jwt expired");
    });

    auth()(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      message: "Invalid token",
    });
    expect(next).not.toHaveBeenCalled();
  });

  test("اگر نقش کاربر مجاز نباشد، باید وضعیت 403 و پیام Forbidden برگرداند", () => {
    req.headers.authorization = "valid_token";

    // شبیه‌سازی توکن معتبری که نقش آن user است
    jwt.verify.mockReturnValue({ id: "user123", role: "user" });

    // تعریف میان‌افزار فقط برای نقش admin
    auth("admin")(req, res, next);

    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      message: "Forbidden access",
    });
    expect(next).not.toHaveBeenCalled();
  });

  test("اگر توکن و نقش کاربر کاملاً درست باشد، باید متد next را صدا بزند", () => {
    req.headers.authorization = "valid_token";
    const mockUser = { id: "user123", role: "admin" };

    jwt.verify.mockReturnValue(mockUser);

    // تعریف میان‌افزار برای نقش admin
    auth("admin")(req, res, next);

    expect(req.user).toEqual(mockUser); // بررسی ست شدن دیتا روی req.user
    expect(next).toHaveBeenCalled(); // باید با موفقیت به کنترلر بعدی پاس داده شود
    expect(res.status).not.toHaveBeenCalled();
  });
});
