const express = require("express");
const request = require("supertest");
const curriculumController = require("../curriculum.controller");
const curriculumService = require("../curriculum.service");

// شبیه‌سازی متدهای سرویس برای تست مجزای کنترلر
jest.mock("../curriculum.service");

const app = express();
app.use(express.json());

// تعریف مسیرهای تست اکسپرس
app.post("/curriculums", curriculumController.createCurriculum);
app.get("/curriculums", curriculumController.getAllCurriculums);
app.get("/curriculums/:id", curriculumController.getSingleCurriculum);
app.put("/curriculums/:id", curriculumController.updateCurriculum);
app.delete("/curriculums/:id", curriculumController.deleteCurriculum);

describe("تست‌های اختصاصی Curriculum Controller (تست API)", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("POST /curriculums باید برنامه را ساخته و وضعیت 201 برگرداند", async () => {
    curriculumService.createCurriculum.mockResolvedValue({
      id: "cur1",
      title: "Git Basics",
    });

    const response = await request(app)
      .post("/curriculums")
      .send({ title: "Git Basics" });

    expect(response.status).toBe(201);
    expect(response.body.success).toBe(true);
    expect(response.body.message).toBe("Curriculum created successfully");
  });

  test("GET /curriculums باید وضعیت 200 و آرایه‌ای از اطلاعات برگرداند", async () => {
    curriculumService.getAllCurriculums.mockResolvedValue([{ id: "cur1" }]);

    const response = await request(app).get("/curriculums");

    expect(response.status).toBe(200);
    expect(response.body.data).toBeInstanceOf(Array);
  });

  test("GET /curriculums/:id باید وضعیت 200 برگرداند", async () => {
    curriculumService.getSingleCurriculum.mockResolvedValue({ id: "cur1" });

    const response = await request(app).get("/curriculums/cur1");

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
  });

  test("PUT /curriculums/:id باید برنامه را آپدیت کرده و وضعیت 200 بدهد", async () => {
    curriculumService.updateCurriculum.mockResolvedValue({ id: "cur1" });

    const response = await request(app)
      .put("/curriculums/cur1")
      .send({ title: "Advanced Git" });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Curriculum updated successfully");
  });

  test("DELETE /curriculums/:id باید برنامه را حذف کرده و وضعیت 200 بدهد", async () => {
    curriculumService.deleteCurriculum.mockResolvedValue({ id: "cur1" });

    const response = await request(app).delete("/curriculums/cur1");

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Curriculum deleted successfully");
  });
});
