const globalErrorHandler = require("../../middlewares/globalErrorHandler"); // آدرس فایل را با پروژه خود ست کنید

describe("تست‌های اختصاصی Global Error Handler", () => {
  let req, res, next;

  beforeEach(() => {
    // ساخت شیء‌های فرضی محيط اکسپرس برای پاس دادن به میان‌افزار
    req = {};
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
    next = jest.fn();
  });

  test("اگر خطا دارای statusCode مشخص باشد، باید همان کد و پیام را برگرداند", () => {
    // ایجاد یک خطای فرضی با کد ۴۰۰
    const mockError = new Error("اطلاعات ارسالی معتبر نیست");
    mockError.statusCode = 400;

    // اجرای مدیریت خطا
    globalErrorHandler(mockError, req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      message: "اطلاعات ارسالی معتبر نیست",
    });
  });

  test("اگر خطا statusCode نداشته باشد، باید به صورت پیش‌فرض وضعیت 500 و پیام Internal Server Error بدهد", () => {
    // ایجاد یک خطای معمولی سیستمی بدون کد وضعیت
    const mockError = new Error();

    globalErrorHandler(mockError, req, res, next);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      message: "Internal Server Error",
    });
  });
});
