const express = require("express");
const request = require("supertest");
const classController = require("../class.controller");
const classService = require("../class.service");

// شبیه‌سازی متدهای سرویس برای تست مجزای کنترلر
jest.mock("../class.service");

const app = express();
app.use(express.json());

// تعریف مسیرهای تست اکسپرس
app.post("/classes", classController.createClass);
app.get("/classes", classController.getAllClasses);
app.get("/classes/:id", classController.getSingleClass);
app.put("/classes/:id", classController.updateClass);
app.delete("/classes/:id", classController.deleteClass);
app.post("/classes/:id/assign", classController.assignInstructor);

describe("تست‌های اختصاصی Class Controller (تست API)", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("POST /classes باید وضعیت 201 برگرداند", async () => {
    classService.createClass.mockResolvedValue({ id: "1", name: "Physics" });
    const response = await request(app)
      .post("/classes")
      .send({ name: "Physics" });

    expect(response.status).toBe(201);
    expect(response.body.success).toBe(true);
    expect(response.body.message).toBe("Class created successfully");
  });

  test("GET /classes باید وضعیت 200 و دیتای کلاس‌ها را برگرداند", async () => {
    classService.getAllClasses.mockResolvedValue([{ id: "1" }]);

    const response = await request(app).get("/classes");

    expect(response.status).toBe(200);
    expect(response.body.data).toBeInstanceOf(Array);
  });

  test("GET /classes/:id باید وضعیت 200 برگرداند", async () => {
    classService.getSingleClass.mockResolvedValue({ id: "1" });

    const response = await request(app).get("/classes/1");

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
  });

  test("PUT /classes/:id باید وضعیت 200 و پیام موفقیت بدهد", async () => {
    classService.updateClass.mockResolvedValue({ id: "1" });

    const response = await request(app)
      .put("/classes/1")
      .send({ name: "Chemistry" });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Class updated successfully");
  });

  test("DELETE /classes/:id باید وضعیت 200 بدهد", async () => {
    classService.deleteClass.mockResolvedValue({ id: "1" });

    const response = await request(app).delete("/classes/1");

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Class deleted successfully");
  });

  test("POST /classes/:id/assign باید استاد را متصل کند", async () => {
    classService.assignInstructor.mockResolvedValue({ id: "1" });

    const response = await request(app)
      .post("/classes/1/assign")
      .send({ instructorId: "inst99" });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Instructor assigned successfully");
  });
});
