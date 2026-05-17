const Student = require("./student.model");

const createStudent = async (payload) => {
  const result = await Student.create(payload);

  return result;
};

const getAllStudents = async (query) => {
  const page = Number(query.page) || 1;
  const limit = Number(query.limit) || 10;
  const skip = (page - 1) * limit;
  const search = query.search;
  const sortBy = query.sortBy || "createdAt";
  const sortOrder = query.sortOrder === "asc" ? 1 : -1;
  const academicStatus = query.academicStatus;
  const financialStatus = query.financialStatus;

  const filters = {};

  if (academicStatus) {
    filters.academicStatus = academicStatus;
  }

  if (financialStatus) {
    filters.financialStatus = financialStatus;
  }

  let result;

  if (search) {
    result = await Student.find(filters)
      .populate({
        path: "user",

        match: {
          fullName: {
            $regex: search,
            $options: "i",
          },
        },
      })
      .sort({ [sortBy]: sortOrder })
      .skip(skip)
      .limit(limit);

    result = result.filter((student) => student.user !== null);

    if (result.length === 0) {
      throw new Error("No student found");
    }
  } else {
    result = await Student.find(filters)
      .populate("user")
      .sort({ [sortBy]: sortOrder })
      .skip(skip)
      .limit(limit);
  }

  const total = result.length;

  return {
    meta: {
      page,
      limit,
      total,
    },

    data: result,
  };
};

const getSingleStudent = async (id) => {
  const result = await Student.findById(id).populate("user");

  return result;
};

const updateStudent = async (id, payload) => {
  const result = await Student.findByIdAndUpdate(id, payload, {
    new: true,
  });

  return result;
};

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
