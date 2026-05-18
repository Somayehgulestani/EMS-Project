const courseService = require("../course.service");
const Course = require("../course.model");

// شبیه‌سازی مدل مونگوز دوره‌ها
jest.mock("../course.model");

describe("تست‌های اختصاصی Course Service", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("متد createCourse باید دوره جدید بسازد", async () => {
    const payload = { title: "Node.js Backend", price: 150 };
    Course.create.mockResolvedValue(payload);

    const result = await courseService.createCourse(payload);
    expect(Course.create).toHaveBeenCalledWith(payload);
    expect(result.title).toBe("Node.js Backend");
  });

  test("متد getAllCourses باید لیست تمام دوره‌ها را برگرداند", async () => {
    const mockCourses = [{ title: "Course 1" }, { title: "Course 2" }];
    Course.find.mockResolvedValue(mockCourses);

    const result = await courseService.getAllCourses();
    expect(Course.find).toHaveBeenCalled();
    expect(result).toHaveLength(2);
    expect(result[0].title).toBe("Course 1");
  });

  test("متد getSingleCourse باید یک دوره را با شناسه برگرداند", async () => {
    const mockCourse = { _id: "course123", title: "React.js" };
    Course.findById.mockResolvedValue(mockCourse);

    const result = await courseService.getSingleCourse("course123");
    expect(Course.findById).toHaveBeenCalledWith("course123");
    expect(result.title).toBe("React.js");
  });

  test("متد updateCourse باید دوره را آپدیت کند", async () => {
    const payload = { title: "Next.js Updated" };
    Course.findByIdAndUpdate.mockResolvedValue(payload);

    const result = await courseService.updateCourse("course123", payload);
    expect(Course.findByIdAndUpdate).toHaveBeenCalledWith(
      "course123",
      payload,
      { new: true },
    );
    expect(result.title).toBe("Next.js Updated");
  });

  test("متد deleteCourse باید دوره را حذف کند", async () => {
    Course.findByIdAndDelete.mockResolvedValue({ _id: "course123" });

    const result = await courseService.deleteCourse("course123");
    expect(Course.findByIdAndDelete).toHaveBeenCalledWith("course123");
    expect(result._id).toBe("course123");
  });
});
