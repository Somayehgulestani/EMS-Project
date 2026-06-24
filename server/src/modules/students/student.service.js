const Student = require("./student.model");

/* =========================
   Generate Student Code
========================= */
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

/* =========================
   Create Student
========================= */
const createStudent = async (payload) => {
  const studentCode = await generateStudentCode();

  const result = await Student.create({
    ...payload,
    studentCode,
  });

  return result;
};

/* =========================
   Get All Students (FLATTENED)
========================= */
// const getAllStudents = async (query) => {
//   const page = Number(query.page) || 1;
//   const limit = Number(query.limit) || 10;
//   const skip = (page - 1) * limit;

//   const sortBy = query.sortBy || "createdAt";
//   const sortOrder = query.sortOrder === "asc" ? 1 : -1;

//   const academicStatus = query.academicStatus;
//   const financialStatus = query.financialStatus;
//   const search = query.search;

//   const filters = {};

//   /* Filters */

//   if (academicStatus) {
//     filters.academicStatus = academicStatus;
//   }

//   if (financialStatus) {
//     filters.financialStatus = financialStatus;
//   }

//   /* Student Code Search */

//   if (search) {
//     filters.studentCode = {
//       $regex: search,
//       $options: "i",
//     };
//   }

//   const result = await Student.find(filters)
//     .populate("user", "fullName email phone")
//     .sort({ [sortBy]: sortOrder })
//     .skip(skip)
//     .limit(limit);

//   /* Flatten */

//   const formatted = result.map((student) => ({
//     id: student._id,
//     studentCode: student.studentCode,

//     academicStatus: student.academicStatus,
//     financialStatus: student.financialStatus,

//     fullName: student.user?.fullName,
//     email: student.user?.email,
//     phone: student.user?.phone,
//   }));

//   /* Statistics */

//   const [total, activeStudents, paidStudents, unpaidStudents, partialStudents] =
//     await Promise.all([
//       Student.countDocuments(filters),

//       Student.countDocuments({
//         academicStatus: "active",
//       }),

//       Student.countDocuments({
//         financialStatus: "paid",
//       }),

//       Student.countDocuments({
//         financialStatus: "unpaid",
//       }),

//       Student.countDocuments({
//         financialStatus: "partial",
//       }),
//     ]);

//   return {
//     meta: {
//       page,
//       limit,
//       total,
//       totalPages: Math.ceil(total / limit),

//       activeStudents,
//       paidStudents,
//       unpaidStudents,
//       partialStudents,
//     },

//     data: formatted,
//   };
// };

/* =========================
   Get All Students
========================= */
const getAllStudents = async (query) => {
  const page = Number(query.page) || 1;
  const limit = Number(query.limit) || 10;
  const skip = (page - 1) * limit;

  const sortBy = query.sortBy || "createdAt";
  const sortOrder = query.sortOrder === "asc" ? 1 : -1;

  const academicStatus = query.academicStatus;
  const financialStatus = query.financialStatus;
  const search = query.search;

  const match = {};

  if (academicStatus) {
    match.academicStatus = academicStatus;
  }

  if (financialStatus) {
    match.financialStatus = financialStatus;
  }

  const pipeline = [
    {
      $lookup: {
        from: "users",
        localField: "user",
        foreignField: "_id",
        as: "user",
      },
    },
    {
      $unwind: "$user",
    },
    {
      $match: {
        ...match,
        ...(search
          ? {
              $or: [
                {
                  studentCode: {
                    $regex: search,
                    $options: "i",
                  },
                },
                {
                  "user.fullName": {
                    $regex: search,
                    $options: "i",
                  },
                },
              ],
            }
          : {}),
      },
    },
    {
      $sort: {
        [sortBy]: sortOrder,
      },
    },
    {
      $skip: skip,
    },
    {
      $limit: limit,
    },
    {
      $project: {
        id: "$_id",
        studentCode: 1,
        academicStatus: 1,
        financialStatus: 1,
        fullName: "$user.fullName",
        email: "$user.email",
        phone: "$user.phone",
      },
    },
  ];

  const data = await Student.aggregate(pipeline);

  const total = await Student.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "user",
        foreignField: "_id",
        as: "user",
      },
    },
    {
      $unwind: "$user",
    },
    {
      $match: {
        ...match,
        ...(search
          ? {
              $or: [
                {
                  studentCode: {
                    $regex: search,
                    $options: "i",
                  },
                },
                {
                  "user.fullName": {
                    $regex: search,
                    $options: "i",
                  },
                },
              ],
            }
          : {}),
      },
    },
    {
      $count: "total",
    },
  ]);

  const [
    activeStudents,
    inactiveStudents,
    graduatedStudents,
    paidStudents,
    partialStudents,
    unpaidStudents,
  ] = await Promise.all([
    Student.countDocuments({ academicStatus: "active" }),
    Student.countDocuments({ academicStatus: "inactive" }),
    Student.countDocuments({ academicStatus: "graduated" }),
    Student.countDocuments({ financialStatus: "paid" }),
    Student.countDocuments({ financialStatus: "partial" }),
    Student.countDocuments({ financialStatus: "unpaid" }),
  ]);

  return {
    meta: {
      page,
      limit,
      total: total.length ? total[0].total : 0,
      totalPages: Math.ceil((total.length ? total[0].total : 0) / limit),

      statistics: {
        activeStudents,
        inactiveStudents,
        graduatedStudents,
        paidStudents,
        partialStudents,
        unpaidStudents,
      },
    },

    data,
  };
};

/* =========================
   Get Single Student
========================= */
const getSingleStudent = async (id) => {
  const result = await Student.findById(id).populate(
    "user",
    "fullName email phone",
  );

  if (!result) {
    throw new Error("Student not found");
  }

  return {
    id: result._id,
    studentCode: result.studentCode,
    academicStatus: result.academicStatus,
    financialStatus: result.financialStatus,

    fullName: result.user?.fullName,
    email: result.user?.email,
    phone: result.user?.phone,
  };
};

/* =========================
   Update Student
========================= */
const updateStudent = async (id, payload) => {
  const result = await Student.findByIdAndUpdate(id, payload, {
    new: true,
  }).populate("user", "fullName email phone");

  if (!result) {
    throw new Error("Student not found");
  }

  return {
    id: result._id,
    studentCode: result.studentCode,
    academicStatus: result.academicStatus,
    financialStatus: result.financialStatus,

    fullName: result.user?.fullName,
    email: result.user?.email,
    phone: result.user?.phone,
  };
};

/* =========================
   Delete Student
========================= */
const deleteStudent = async (id) => {
  const result = await Student.findByIdAndDelete(id);

  if (!result) {
    throw new Error("Student not found");
  }

  return null;
};

module.exports = {
  createStudent,
  getAllStudents,
  getSingleStudent,
  updateStudent,
  deleteStudent,
};
