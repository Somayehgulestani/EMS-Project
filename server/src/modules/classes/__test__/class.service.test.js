const classService = require("../class.service");
const Class = require("../class.model");
const Notification = require("../../notifications/notification.model");

// شبیه‌سازی مدل‌های مونگوز
jest.mock("../class.model");
jest.mock("../../notifications/notification.model");

describe("تست‌های اختصاصی Class Service", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("متد createClass باید کلاس جدید بسازد", async () => {
    const payload = { className: "Math 101", code: "M101" };
    Class.create.mockResolvedValue(payload);

    const result = await classService.createClass(payload);
    expect(Class.create).toHaveBeenCalledWith(payload);
    expect(result.className).toBe("Math 101");
  });

  // test("متد getAllClasses باید لیست کلاس‌ها را با پاپولیت برگرداند", async () => {
  //   const mockPopulate = jest.fn().mockReturnThis();
  //   Class.find.mockReturnValue({ populate: mockPopulate });
  //   mockPopulate.mockResolvedValue([{ className: "Class 1" }]);

  //   const result = await classService.getAllClasses();
  //   expect(Class.find).toHaveBeenCalled();
  //   expect(result[0].className).toBe("Class 1");
  // });
  test("متد getAllClasses باید لیست کلاس‌ها را با پاپولیت برگرداند", async () => {
    // شبیه‌سازی دقیق زنجیره سه تایی populate
    Class.find.mockReturnValue({
      populate: jest.fn().mockReturnValue({
        populate: jest.fn().mockReturnValue({
          populate: jest.fn().mockResolvedValue([{ className: "Class 1" }]),
        }),
      }),
    });

    const result = await classService.getAllClasses();
    expect(Class.find).toHaveBeenCalled();
    expect(result).toBeInstanceOf(Array);
    expect(result[0].className).toBe("Class 1");
  });

  test("متد updateClass باید کلاس را بر اساس شناسه آپدیت کند", async () => {
    Class.findByIdAndUpdate.mockResolvedValue({ className: "Updated Name" });

    const result = await classService.updateClass("id123", {
      className: "Updated Name",
    });
    expect(Class.findByIdAndUpdate).toHaveBeenCalledWith(
      "id123",
      { className: "Updated Name" },
      { new: true },
    );
    expect(result.className).toBe("Updated Name");
  });

  test("متد deleteClass باید کلاس را حذف کند", async () => {
    Class.findByIdAndDelete.mockResolvedValue({ _id: "id123" });

    const result = await classService.deleteClass("id123");
    expect(Class.findByIdAndDelete).toHaveBeenCalledWith("id123");
    expect(result._id).toBe("id123");
  });

  test("متد assignInstructor باید استاد را اضافه کرده و نوتیفیکیشن بسازد", async () => {
    const mockPopulate = jest.fn().mockResolvedValue({ _id: "class1" });
    Class.findByIdAndUpdate.mockReturnValue({ populate: mockPopulate });
    Notification.create.mockResolvedValue({});

    const result = await classService.assignInstructor("class1", "instructor1");

    expect(Class.findByIdAndUpdate).toHaveBeenCalledWith(
      "class1",
      { $addToSet: { instructors: "instructor1" } },
      { new: true },
    );
    expect(Notification.create).toHaveBeenCalledWith({
      user: "instructor1",
      title: "New Class Assigned",
      message: "You have been assigned to a new class.",
    });
    expect(result._id).toBe("class1");
  });
});
