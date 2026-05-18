const express = require("express");
const request = require("supertest");
const instructorController = require("../instructor.controller");
const instructorService = require("../instructor.service");

// شبیه‌سازی متدهای سرویس برای تست مجزای کنترلر
jest.mock("../instructor.service");

const app = express();
app.use(express.json());

// تعریف مسیرهای تست اکسپرس
app.post("/instructors", instructorController.createInstructor);
app.get("/instructors", instructorController.getAllInstructors);
app.get("/instructors/:id", instructorController.getSingleInstructor);

describe("تست‌های اختصاصی Instructor Controller (تست API)", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("POST /instructors باید وضعیت 201 برگرداند", async () => {
    instructorService.createInstructor.mockResolvedValue({
      id: "inst1",
      specialization: "Node.js",
    });

    const response = await request(app)
      .post("/instructors")
      .send({ specialization: "Node.js" });

    expect(response.status).toBe(201);
    expect(response.body.success).toBe(true);
    expect(response.body.message).toBe("Instructor created successfully");
  });

  test("GET /instructors باید وضعیت 200 و آرایه‌ای از اطلاعات برگرداند", async () => {
    instructorService.getAllInstructors.mockResolvedValue([{ id: "inst1" }]);

    const response = await request(app).get("/instructors");

    expect(response.status).toBe(200);
    expect(response.body.data).toBeInstanceOf(Array);
  });

  test("GET /instructors/:id باید وضعیت 200 برگرداند", async () => {
    instructorService.getSingleInstructor.mockResolvedValue({ id: "inst1" });

    const response = await request(app).get("/instructors/inst1");

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
  });
});
