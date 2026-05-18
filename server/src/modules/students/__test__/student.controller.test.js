const express = require("express");
const request = require("supertest");
const studentController = require("../student.controller");
const studentService = require("../student.service");

// شبیه‌سازی متدهای سرویس برای تست کنترلر
jest.mock("../student.service");

const app = express();
app.use(express.json());

// تعریف مسیرهای مجازی اکسپرس
app.post("/students", studentController.createStudent);
app.get("/students", studentController.getAllStudents);
app.get("/students/:id", studentController.getSingleStudent);
app.put("/students/:id", studentController.updateStudent);
app.delete("/students/:id", studentController.deleteStudent);

describe("تست‌های اختصاصی Student Controller (تست API)", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("POST /students باید شاگرد را ساخته و وضعیت 201 برگرداند", async () => {
    studentService.createStudent.mockResolvedValue({
      id: "s1",
      rollNumber: "102",
    });

    const response = await request(app)
      .post("/students")
      .send({ rollNumber: "102" });

    expect(response.status).toBe(201);
    expect(response.body.success).toBe(true);
    expect(response.body.message).toBe("Student created successfully");
  });

  test("GET /students باید کوئری‌ها را ارسال کرده و وضعیت 200 بدهد", async () => {
    const mockResponse = { meta: { page: 1, limit: 10, total: 0 }, data: [] };
    studentService.getAllStudents.mockResolvedValue(mockResponse);

    const response = await request(app)
      .get("/students")
      .query({ page: "2", limit: "5", search: "Ali" });

    expect(response.status).toBe(200);
    expect(studentService.getAllStudents).toHaveBeenCalledWith({
      page: "2",
      limit: "5",
      search: "Ali",
    });
    expect(response.body.data.meta.page).toBe(1);
  });

  test("PUT /students/:id باید وضعیت 200 و پیام آپدیت موفقیت‌آمیز بدهد", async () => {
    studentService.updateStudent.mockResolvedValue({ id: "s1" });

    const response = await request(app)
      .put("/students/s1")
      .send({ academicStatus: "graduated" });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Student updated successfully");
  });

  test("DELETE /students/:id باید وضعیت 200 و پیام حذف موفقیت‌آمیز بدهد", async () => {
    studentService.deleteStudent.mockResolvedValue({ id: "s1" });

    const response = await request(app).delete("/students/s1");

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Student deleted successfully");
  });
});
