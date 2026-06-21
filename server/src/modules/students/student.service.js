const Student = require("./student.model");

const generateStudentCode = async () => {
  const lastStudent = await Student.findOne()
    .sort({ createdAt: -1 })
    .select("studentCode");

  if (!lastStudent || !lastStudent.studentCode) {
    return "STU-000001";
  }
  const lastNumber = parseInt(lastStudent.studentCode.split("-")[1]);
  const newNumber = lastNumber + 1;
  return `STU-${String(newNumber).padStart(6, "0")}`;
};

/*Create Student (Auto or Manual)*/
const createStudent = async (payload) => {
  const studentCode = await generateStudentCode();

  const result = await Student.create({
    ...payload,
    studentCode,
  });

  return result;
};

/*Get All Students (Admin Dashboard)*/
const getAllStudents = async (query) => {
  const page = Number(query.page) || 1;
  const limit = Number(query.limit) || 10;
  const skip = (page - 1) * limit;

  const sortBy = query.sortBy || "createdAt";
  const sortOrder = query.sortOrder === "asc" ? 1 : -1;

  const academicStatus = query.academicStatus;
  const financialStatus = query.financialStatus;
  const search = query.search;

  const filters = {};

  // Filters
  if (academicStatus) {
    filters.academicStatus = academicStatus;
  }

  if (financialStatus) {
    filters.financialStatus = financialStatus;
  }

  let queryData = Student.find(filters)
    .populate("user")
    .sort({ [sortBy]: sortOrder })
    .skip(skip)
    .limit(limit);

  let result = await queryData;

  // Search (by name)
  if (search) {
    result = result.filter((student) =>
      student?.user?.fullName?.toLowerCase().includes(search.toLowerCase()),
    );
  }

  // Total count (important fix: based on real DB, not filtered page data)
  const total = await Student.countDocuments(filters);

  return {
    meta: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
    data: result,
  };
};

/*Get Single Student*/
const getSingleStudent = async (id) => {
  const result = await Student.findById(id).populate("user");

  if (!result) {
    throw new Error("Student not found");
  }

  return result;
};

/* Update Student (Status management)*/
const updateStudent = async (id, payload) => {
  const result = await Student.findByIdAndUpdate(id, payload, {
    new: true,
  });

  if (!result) {
    throw new Error("Student not found");
  }

  return result;
};

/* Delete Student*/
const deleteStudent = async (id) => {
  const result = await Student.findByIdAndDelete(id);

  if (!result) {
    throw new Error("Student not found");
  }

  return result;
};

module.exports = {
  createStudent,
  getAllStudents,
  getSingleStudent,
  updateStudent,
  deleteStudent,
};
