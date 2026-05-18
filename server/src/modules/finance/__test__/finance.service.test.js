const financeService = require("../finance.service");
const Finance = require("../finance.model");

// شبیه‌سازی مدل مونگوز مالی
jest.mock("../finance.model");

describe("تست‌های اختصاصی Finance Service", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("متد createFinanceRecord", () => {
    test("باید محاسبات باقی‌مانده بدهی و وضعیت paid را به درستی اعمال کند", async () => {
      const payload = { totalFee: 1000, paidAmount: 800, discount: 200 };

      // شبیه‌سازی پاسخ مستقیم دیتابیس با مقادیر محاسبه شده
      Finance.create.mockImplementation((data) => Promise.resolve(data));

      const result = await financeService.createFinanceRecord(payload);

      expect(result.dueAmount).toBe(0);
      expect(result.paymentStatus).toBe("paid");
      expect(Finance.create).toHaveBeenCalled();
    });

    test("باید در صورت پرداخت بخشی از مبلغ، وضعیت را partial ثبت کند", async () => {
      const payload = { totalFee: 1000, paidAmount: 400, discount: 100 };
      Finance.create.mockImplementation((data) => Promise.resolve(data));

      const result = await financeService.createFinanceRecord(payload);

      expect(result.dueAmount).toBe(500);
      expect(result.paymentStatus).toBe("partial");
    });
  });

  describe("متد getAllFinanceRecords و getSingleFinanceRecord", () => {
    test("باید لیست رکوردها را با دو پاپولیت مجزا برگرداند", async () => {
      const mockPopulateCourse = jest
        .fn()
        .mockResolvedValue([{ totalFee: 1000 }]);
      const mockPopulateStudent = jest
        .fn()
        .mockReturnValue({ populate: mockPopulateCourse });
      Finance.find.mockReturnValue({ populate: mockPopulateStudent });

      const result = await financeService.getAllFinanceRecords();

      expect(Finance.find).toHaveBeenCalled();
      expect(mockPopulateStudent).toHaveBeenCalledWith("student");
      expect(mockPopulateCourse).toHaveBeenCalledWith("course");
      expect(result).toBeInstanceOf(Array);
    });
  });

  describe("متد addInstallment", () => {
    test("باید قسط جدید را اضافه کرده و موجودی را به روز رسانی کند", async () => {
      // شبیه‌سازی یک سند یا داکیومنت مونگوز که متد save دارد
      const mockFinanceInstance = {
        totalFee: 1000,
        paidAmount: 500,
        discount: 100,
        dueAmount: 400,
        paymentStatus: "partial",
        installments: [],
        save: jest.fn().mockResolvedValue(true),
      };

      Finance.findById.mockResolvedValue(mockFinanceInstance);

      const installmentData = { amount: 200, date: "2026-05-18" };
      const result = await financeService.addInstallment(
        "rec123",
        installmentData,
      );

      expect(Finance.findById).toHaveBeenCalledWith("rec123");
      expect(result.installments).toContain(installmentData);
      expect(result.paidAmount).toBe(700);
      expect(result.dueAmount).toBe(200);
      expect(result.paymentStatus).toBe("partial");
      expect(mockFinanceInstance.save).toHaveBeenCalled();
    });

    test("اگر رکورد پیدا نشد باید ارور Finance record not found بدهد", async () => {
      Finance.findById.mockResolvedValue(null);
      await expect(
        financeService.addInstallment("wrong_id", { amount: 100 }),
      ).rejects.toThrow("Finance record not found");
    });
  });
});
