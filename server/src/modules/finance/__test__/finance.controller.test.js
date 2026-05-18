const express = require("express");
const request = require("supertest");
const financeController = require("../finance.controller");
const financeService = require("../finance.service");

// شبیه‌سازی متدهای سرویس برای تست کنترلر
jest.mock("../finance.service");

const app = express();
app.use(express.json());

// تعریف مسیرهای تست مجازی اکسپرس
app.post("/finance", financeController.createFinanceRecord);
app.get("/finance", financeController.getAllFinanceRecords);
app.get("/finance/:id", financeController.getSingleFinanceRecord);
app.post("/finance/:id/installments", financeController.addInstallment);

describe("تست‌های اختصاصی Finance Controller (تست API)", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("POST /finance باید وضعیت 201 برگرداند", async () => {
    financeService.createFinanceRecord.mockResolvedValue({
      id: "f1",
      totalFee: 1000,
    });

    const response = await request(app)
      .post("/finance")
      .send({ totalFee: 1000, paidAmount: 1000 });

    expect(response.status).toBe(201);
    expect(response.body.success).toBe(true);
    expect(response.body.message).toBe("Finance record created successfully");
  });

  test("GET /finance باید لیست کل تراکنش‌ها را با وضعیت 200 بدهد", async () => {
    financeService.getAllFinanceRecords.mockResolvedValue([]);

    const response = await request(app).get("/finance");

    expect(response.status).toBe(200);
    expect(response.body.data).toBeInstanceOf(Array);
  });

  test("POST /finance/:id/installments باید قسط جدید را ثبت کند", async () => {
    financeService.addInstallment.mockResolvedValue({
      id: "f1",
      paymentStatus: "paid",
    });

    const response = await request(app)
      .post("/finance/f1/installments")
      .send({ amount: 300 });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Installment added successfully");
  });
});
