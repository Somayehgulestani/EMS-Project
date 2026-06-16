const Student = require("./student.model");

/*
   Create Student */

const createStudent = async (payload) => {
  const result = await Student.create(payload);

  return result;
};

/*
   Get All Students */

const getAllStudents = async (query) => {
  const page = Number(query.page) || 1;

  const limit = Number(query.limit) || 10;

  const skip = (page - 1) * limit;

  const sortBy = query.sortBy || "createdAt";

  const sortOrder = query.sortOrder === "asc" ? 1 : -1;

  const academicStatus = query.academicStatus;

  const financialStatus = query.financialStatus;

  const search = query.search;

  /* Filters */

  const filters = {};

  if (academicStatus) {
    filters.academicStatus = academicStatus;
  }

  if (financialStatus) {
    filters.financialStatus = financialStatus;
  }

  /* Query */

  let studentsQuery = Student.find(filters)
    .populate("user")
    .sort({ [sortBy]: sortOrder })
    .skip(skip)
    .limit(limit);

  let result = await studentsQuery;

  /* Search */

  if (search) {
    result = result.filter((student) =>
      student?.user?.fullName?.toLowerCase().includes(search.toLowerCase()),
    );
  }

  /* Total Count */

  const total = await Student.countDocuments(filters);

  return {
    meta: {
      page,
      limit,
      total,
    },

    data: result,
  };
};

/*
   Get Single Student */

const getSingleStudent = async (id) => {
  const result = await Student.findById(id).populate("user");

  return result;
};

/*
   Update Student */

const updateStudent = async (id, payload) => {
  const result = await Student.findByIdAndUpdate(id, payload, {
    new: true,
  });

  return result;
};

/*
   Delete Student */

const deleteStudent = async (id) => {
  const result = await Student.findByIdAndDelete(id);

  return result;
};

module.exports = {
  createStudent,
  getAllStudents,
  getSingleStudent,
  updateStudent,
  deleteStudent,
};
