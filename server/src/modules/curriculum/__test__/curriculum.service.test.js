const curriculumService = require("../curriculum.service");
const Curriculum = require("../curriculum.model");

// شبیه‌سازی مدل مونگوز برنامه آموزشی
jest.mock("../curriculum.model");

describe("تست‌های اختصاصی Curriculum Service", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("متد createCurriculum باید یک برنامه آموزشی جدید بسازد", async () => {
    const payload = { title: "Week 1: Intro", course: "courseId123" };
    Curriculum.create.mockResolvedValue(payload);

    const result = await curriculumService.createCurriculum(payload);
    expect(Curriculum.create).toHaveBeenCalledWith(payload);
    expect(result.title).toBe("Week 1: Intro");
  });

  test("متد getAllCurriculums باید لیست برنامه‌ها را همراه با پاپولیت دوره برگرداند", async () => {
    const mockPopulate = jest.fn().mockResolvedValue([{ title: "Week 1" }]);
    Curriculum.find.mockReturnValue({ populate: mockPopulate });

    const result = await curriculumService.getAllCurriculums();
    expect(Curriculum.find).toHaveBeenCalled();
    expect(mockPopulate).toHaveBeenCalledWith("course");
    expect(result).toBeInstanceOf(Array);
  });

  test("متد getSingleCurriculum باید یک برنامه را با شناسه و پاپولیت برگرداند", async () => {
    const mockPopulate = jest
      .fn()
      .mockResolvedValue({ _id: "curr123", title: "Week 2" });
    Curriculum.findById.mockReturnValue({ populate: mockPopulate });

    const result = await curriculumService.getSingleCurriculum("curr123");
    expect(Curriculum.findById).toHaveBeenCalledWith("curr123");
    expect(mockPopulate).toHaveBeenCalledWith("course");
    expect(result.title).toBe("Week 2");
  });

  test("متد updateCurriculum باید برنامه آموزشی را آپدیت کند", async () => {
    const payload = { title: "Updated Week 1" };
    Curriculum.findByIdAndUpdate.mockResolvedValue(payload);

    const result = await curriculumService.updateCurriculum("curr123", payload);
    expect(Curriculum.findByIdAndUpdate).toHaveBeenCalledWith(
      "curr123",
      payload,
      { new: true },
    );
    expect(result.title).toBe("Updated Week 1");
  });

  test("متد deleteCurriculum باید برنامه آموزشی را حذف کند", async () => {
    Curriculum.findByIdAndDelete.mockResolvedValue({ _id: "curr123" });

    const result = await curriculumService.deleteCurriculum("curr123");
    expect(Curriculum.findByIdAndDelete).toHaveBeenCalledWith("curr123");
    expect(result._id).toBe("curr123");
  });
});
