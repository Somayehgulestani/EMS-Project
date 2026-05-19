const catchAsync = require("./catchAsync");

describe("catchAsync Utility Test", () => {
  let req, res, next;

  beforeEach(() => {
    req = {};
    res = {};
    next = jest.fn();
  });

  // ۱. تست حالت عادی (بدون خطا)
  test("should resolve and execute the inner function successfully", async () => {
    const mockController = jest.fn().mockResolvedValue("Success");
    const wrappedFunction = catchAsync(mockController);

    await wrappedFunction(req, res, next);

    expect(mockController).toHaveBeenCalledWith(req, res, next);
    expect(next).not.toHaveBeenCalled();
  });

  // ۲. تست مدیریت خطاهای آسنکرون (Promise)
  test("should catch rejected promise and pass the error to next()", async () => {
    const mockError = new Error("Async Error");
    const mockController = jest.fn().mockRejectedValue(mockError);
    const wrappedFunction = catchAsync(mockController);

    await wrappedFunction(req, res, next);

    expect(next).toHaveBeenCalledWith(mockError);
  });

  // ۳. تست مدیریت خطاهای سنکرون (Throw)
  test("should catch synchronous throw and pass the error to next()", async () => {
    const mockError = new Error("Sync Error");
    const mockController = jest.fn().mockImplementation(() => {
      throw mockError;
    });
    const wrappedFunction = catchAsync(mockController);

    await wrappedFunction(req, res, next);

    expect(next).toHaveBeenCalledWith(mockError);
  });
});
