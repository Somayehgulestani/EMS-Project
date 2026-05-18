const instructorService = require("../instructor.service");
const Instructor = require("../instructor.model");

// شبیه‌سازی مدل مونگوز اساتید
jest.mock("../instructor.model");

describe("تست‌های اختصاصی Instructor Service", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("متد createInstructor باید استاد جدید بسازد", async () => {
    const payload = { user: "userId123", specialization: "Web Development" };
    Instructor.create.mockResolvedValue(payload);

    const result = await instructorService.createInstructor(payload);
    expect(Instructor.create).toHaveBeenCalledWith(payload);
    expect(result.specialization).toBe("Web Development");
  });

  test("متد getAllInstructors باید لیست اساتید را با زنجیره پاپولیت دوگانه برگرداند", async () => {
    // شبیه‌سازی دقیق زنجیره دو تایی populate (.populate().populate())
    const mockPopulateClasses = jest
      .fn()
      .mockResolvedValue([{ specialization: "AI" }]);
    const mockPopulateUser = jest
      .fn()
      .mockReturnValue({ populate: mockPopulateClasses });
    Instructor.find.mockReturnValue({ populate: mockPopulateUser });

    const result = await instructorService.getAllInstructors();

    expect(Instructor.find).toHaveBeenCalled();
    expect(mockPopulateUser).toHaveBeenCalledWith("user");
    expect(mockPopulateClasses).toHaveBeenCalledWith("assignedClasses");
    expect(result).toBeInstanceOf(Array);
  });

  test("متد getSingleInstructor باید مشخصات یک استاد را با پاپولیت برگرداند", async () => {
    const mockPopulateClasses = jest
      .fn()
      .mockResolvedValue({ _id: "inst123", specialization: "Math" });
    const mockPopulateUser = jest
      .fn()
      .mockReturnValue({ populate: mockPopulateClasses });
    Instructor.findById.mockReturnValue({ populate: mockPopulateUser });

    const result = await instructorService.getSingleInstructor("inst123");

    expect(Instructor.findById).toHaveBeenCalledWith("inst123");
    expect(mockPopulateUser).toHaveBeenCalledWith("user");
    expect(mockPopulateClasses).toHaveBeenCalledWith("assignedClasses");
    expect(result.specialization).toBe("Math");
  });
});
