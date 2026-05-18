const express = require("express");
const request = require("supertest");
const courseController = require("../course.controller");
const courseService = require("../course.service");

// شبیه‌سازی متدهای سرویس برای تست مجزای کنترلر
jest.mock("../course.service");

const app = express();
app.use(express.json());

// تعریف مسیرهای مجازی اکسپرس برای تست
app.post("/courses", courseController.createCourse);
app.get("/courses", courseController.getAllCourses);
app.get("/courses/:id", courseController.getSingleCourse);
app.put("/courses/:id", courseController.updateCourse);
app.delete("/courses/:id", courseController.deleteCourse);

describe("تست‌های اختصاصی Course Controller (تست API)", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("POST /courses باید دوره را ساخته و وضعیت 201 برگرداند", async () => {
    courseService.createCourse.mockResolvedValue({ id: "c1", title: "Docker" });

    const response = await request(app)
      .post("/courses")
      .send({ title: "Docker" });

    expect(response.status).toBe(201);
    expect(response.body.success).toBe(true);
    expect(response.body.message).toBe("Course created successfully");
  });

  test("GET /courses باید وضعیت 200 و آرایه‌ای از دوره‌ها را برگرداند", async () => {
    courseService.getAllCourses.mockResolvedValue([{ id: "c1" }]);

    const response = await request(app).get("/courses");

    expect(response.status).toBe(200);
    expect(response.body.data).toBeInstanceOf(Array);
  });

  test("GET /courses/:id باید وضعیت 200 برگرداند", async () => {
    courseService.getSingleCourse.mockResolvedValue({ id: "c1", title: "Git" });

    const response = await request(app).get("/courses/c1");

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
  });

  test("PUT /courses/:id باید دوره را آپدیت کرده و وضعیت 200 بدهد", async () => {
    courseService.updateCourse.mockResolvedValue({ id: "c1" });

    const response = await request(app)
      .put("/courses/c1")
      .send({ title: "Git Advanced" });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Course updated successfully");
  });

  test("DELETE /courses/:id باید دوره را حذف کرده و وضعیت 200 بدهد", async () => {
    courseService.deleteCourse.mockResolvedValue({ id: "c1" });

    const response = await request(app).delete("/courses/c1");

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Course deleted successfully");
  });
});
