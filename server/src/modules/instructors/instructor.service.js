const Instructor = require("./instructor.model");

const generateInstructorCode = async () => {
  const last = await Instructor.findOne()
    .sort({ createdAt: -1 })
    .select("instructorCode");

  if (!last || !last.instructorCode) {
    return "INS-000001";
  }

  const lastNumber = parseInt(last.instructorCode.split("-")[1]);

  const next = lastNumber + 1;

  return `INS-${String(next).padStart(6, "0")}`;
};

const createInstructor = async (payload) => {
  const instructorCode = await generateInstructorCode();

  const result = await Instructor.create({
    ...payload,
    instructorCode,
  });

  return result;
};

const getAllInstructors = async () => {
  const result = await Instructor.find()
    .populate("user")
    .populate("assignedClasses");

  return result;
};

const getSingleInstructor = async (id) => {
  const result = await Instructor.findById(id)
    .populate("user")
    .populate("assignedClasses");

  return result;
};

module.exports = {
  createInstructor,
  getAllInstructors,
  getSingleInstructor,
};
