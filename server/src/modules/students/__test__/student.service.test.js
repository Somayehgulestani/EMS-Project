const studentService = require("../student.service");
const Student = require("../student.model");

// شبیه‌سازی مدل مونگوز شاگردان
jest.mock("../student.model");

describe("تست‌های اختصاصی Student Service", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("متد createStudent باید شاگرد جدید بسازد", async () => {
    const payload = { rollNumber: "101", academicStatus: "active" };
    Student.create.mockResolvedValue(payload);

    const result = await studentService.createStudent(payload);
    expect(Student.create).toHaveBeenCalledWith(payload);
    expect(result.rollNumber).toBe("101");
  });

  describe("متد getAllStudents", () => {
    test("باید لیست شاگردان را بدون جستجو با صفحه‌بندی پیش‌فرض برگرداند", async () => {
      const mockStudents = [{ id: "s1", user: { fullName: "Ahmad" } }];

      // شبیه‌سازی زنجیره متدهای مونگوز برای حالت بدون سرچ
      const mockLimit = jest.fn().mockResolvedValue(mockStudents);
      const mockSkip = jest.fn().mockReturnValue({ limit: mockLimit });
      const mockSort = jest.fn().mockReturnValue({ skip: mockSkip });
      const mockPopulate = jest.fn().mockReturnValue({ sort: mockSort });
      Student.find.mockReturnValue({ populate: mockPopulate });

      const result = await studentService.getAllStudents({});

      expect(Student.find).toHaveBeenCalledWith({});
      expect(mockPopulate).toHaveBeenCalledWith("user");
      expect(result.meta.page).toBe(1);
      expect(result.meta.limit).toBe(10);
      expect(result.data).toHaveLength(1);
    });

    test("باید در حالت جستجو شاگردان فیلتر شده را برگرداند", async () => {
      const mockStudents = [
        { id: "s1", user: { fullName: "Ali" } },
        { id: "s2", user: null }, // این باید توسط متد filter حذف شود
      ];

      const mockLimit = jest.fn().mockResolvedValue(mockStudents);
      const mockSkip = jest.fn().mockReturnValue({ limit: mockLimit });
      const mockSort = jest.fn().mockReturnValue({ skip: mockSkip });
      const mockPopulate = jest.fn().mockReturnValue({ sort: mockSort });
      Student.find.mockReturnValue({ populate: mockPopulate });

      const result = await studentService.getAllStudents({ search: "Ali" });

      expect(result.data).toHaveLength(1); // رکورد دوم که null بود حذف شده
      expect(result.meta.total).toBe(1);
    });

    test("اگر بعد از فیلتر جستجو شاگردی باقی نماند باید ارور No student found بدهد", async () => {
      const mockStudents = [{ id: "s1", user: null }];

      const mockLimit = jest.fn().mockResolvedValue(mockStudents);
      const mockSkip = jest.fn().mockReturnValue({ limit: mockLimit });
      const mockSort = jest.fn().mockReturnValue({ skip: mockSkip });
      const mockPopulate = jest.fn().mockReturnValue({ sort: mockSort });
      Student.find.mockReturnValue({ populate: mockPopulate });

      await expect(
        studentService.getAllStudents({ search: "Unknown" }),
      ).rejects.toThrow("No student found");
    });
  });

  test("متد getSingleStudent باید یک شاگرد را با شناسه برگرداند", async () => {
    const mockPopulate = jest
      .fn()
      .mockResolvedValue({ _id: "s1", rollNumber: "101" });
    Student.findById.mockReturnValue({ populate: mockPopulate });

    const result = await studentService.getSingleStudent("s1");
    expect(Student.findById).toHaveBeenCalledWith("s1");
    expect(result.rollNumber).toBe("101");
  });
});
