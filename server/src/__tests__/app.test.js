const request = require("supertest");
const app = require("../app");

// ماک کردن تمام مسیرها برای جلوگیری از اجرای منطق پیچیده داخلی آن‌ها
jest.mock(
  "../modules/auth/auth.routes",
  () => (req, res) => res.status(200).json({ message: "Auth Route OK" }),
);
jest.mock(
  "../modules/students/student.routes",
  () => (req, res) => res.status(200).json({ message: "Student Route OK" }),
);
jest.mock(
  "../modules/courses/course.routes",
  () => (req, res) => res.status(200).json({ message: "Course Route OK" }),
);
jest.mock(
  "../modules/curriculum/curriculum.routes",
  () => (req, res) => res.status(200).json({ message: "Curriculum Route OK" }),
);
jest.mock(
  "../modules/classes/class.routes",
  () => (req, res) => res.status(200).json({ message: "Class Route OK" }),
);
jest.mock(
  "../modules/finance/finance.routes",
  () => (req, res) => res.status(200).json({ message: "Finance Route OK" }),
);
jest.mock(
  "../modules/notifications/notification.routes",
  () => (req, res) =>
    res.status(200).json({ message: "Notification Route OK" }),
);
jest.mock(
  "../modules/instructors/instructor.routes",
  () => (req, res) => res.status(200).json({ message: "Instructor Route OK" }),
);

describe("App Integration Tests", () => {
  // تست مسیر اصلی و سلامتی سرور
  test("GET / should return EMS API Running message", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("EMS API Running...");
  });

  // نمونه تست برای صحت کارکرد روترها (مثال: مسیر دانشجویان)
  test("GET /api/v1/students should route correctly to studentRoutes", async () => {
    const response = await request(app).get("/api/v1/students");

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: "Student Route OK" });
  });

  // نمونه تست برای صحت کارکرد روترها (مثال: مسیر احراز هویت)
  test("POST /api/v1/auth should route correctly to authRoutes", async () => {
    const response = await request(app).post("/api/v1/auth");

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: "Auth Route OK" });
  });
});
