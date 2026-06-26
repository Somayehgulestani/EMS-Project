// const Instructor = require("./instructor.model");

// const generateInstructorCode = async () => {
//   const last = await Instructor.findOne()
//     .sort({ createdAt: -1 })
//     .select("instructorCode");

//   if (!last || !last.instructorCode) {
//     return "INS-000001";
//   }

//   const lastNumber = parseInt(last.instructorCode.split("-")[1]);

//   const next = lastNumber + 1;

//   return `INS-${String(next).padStart(6, "0")}`;
// };

// const createInstructor = async (payload) => {
//   const instructorCode = await generateInstructorCode();

//   const result = await Instructor.create({
//     ...payload,
//     instructorCode,
//   });

//   return result;
// };

// const getAllInstructors = async () => {
//   const result = await Instructor.find()
//     .populate("user")
//     .populate("assignedClasses");

//   return result;
// };

// const getSingleInstructor = async (id) => {
//   const result = await Instructor.findById(id)
//     .populate("user")
//     .populate("assignedClasses");

//   return result;
// };

// module.exports = {
//   createInstructor,
//   getAllInstructors,
//   getSingleInstructor,
// };

const Instructor = require("./instructor.model");

/* =========================
   Generate Instructor Code
========================= */

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

/* =========================
   Create Instructor
========================= */

const createInstructor = async (payload) => {
  const instructorCode = await generateInstructorCode();

  const result = await Instructor.create({
    ...payload,
    instructorCode,
  });

  return result;
};

/* =========================
   Get All Instructors
========================= */

const getAllInstructors = async (query) => {
  const page = Number(query.page) || 1;
  const limit = Number(query.limit) || 10;

  const skip = (page - 1) * limit;

  const sortBy = query.sortBy || "createdAt";

  const sortOrder = query.sortOrder === "asc" ? 1 : -1;

  const specialization = query.specialization;

  const isActive = query.isActive;

  const search = query.search;

  const match = {};

  if (specialization) {
    match.specialization = specialization;
  }

  if (isActive !== undefined) {
    match.isActive = isActive === "true";
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
                  instructorCode: {
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

        instructorCode: 1,

        specialization: 1,

        salaryType: 1,

        salary: 1,

        isActive: 1,

        fullName: "$user.fullName",

        email: "$user.email",

        phone: "$user.phone",
      },
    },
  ];

  const data = await Instructor.aggregate(pipeline);

  const total = await Instructor.aggregate([
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
                  instructorCode: {
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
    activeInstructors,
    inactiveInstructors,
    englishInstructors,
    computerInstructors,
    otherInstructors,
  ] = await Promise.all([
    Instructor.countDocuments({
      isActive: true,
    }),

    Instructor.countDocuments({
      isActive: false,
    }),

    Instructor.countDocuments({
      specialization: "English",
    }),

    Instructor.countDocuments({
      specialization: "Computer",
    }),

    Instructor.countDocuments({
      specialization: "Other",
    }),
  ]);

  return {
    meta: {
      page,
      limit,

      total: total.length ? total[0].total : 0,

      totalPages: Math.ceil((total.length ? total[0].total : 0) / limit),
      statistics: {
        activeInstructors,
        inactiveInstructors,

        englishInstructors,
        computerInstructors,
        otherInstructors,
      },
    },

    data,
  };
};

/* =========================
   Get Single Instructor
========================= */

const getSingleInstructor = async (id) => {
  const result = await Instructor.findById(id).populate(
    "user",
    "fullName email phone",
  );

  if (!result) {
    throw new Error("Instructor not found");
  }

  return {
    id: result._id,

    instructorCode: result.instructorCode,

    specialization: result.specialization,

    salaryType: result.salaryType,

    salary: result.salary,

    isActive: result.isActive,

    fullName: result.user?.fullName,

    email: result.user?.email,

    phone: result.user?.phone,
  };
};

/* =========================
   Update Instructor
========================= */

const updateInstructor = async (id, payload) => {
  const result = await Instructor.findByIdAndUpdate(id, payload, {
    new: true,
  }).populate("user", "fullName email phone");

  if (!result) {
    throw new Error("Instructor not found");
  }

  return {
    id: result._id,

    instructorCode: result.instructorCode,

    specialization: result.specialization,

    salaryType: result.salaryType,

    salary: result.salary,

    isActive: result.isActive,

    fullName: result.user?.fullName,

    email: result.user?.email,

    phone: result.user?.phone,
  };
};

/* =========================
   Delete Instructor
========================= */

const deleteInstructor = async (id) => {
  const result = await Instructor.findByIdAndDelete(id);

  if (!result) {
    throw new Error("Instructor not found");
  }

  return null;
};

module.exports = {
  createInstructor,
  getAllInstructors,
  getSingleInstructor,
  updateInstructor,
  deleteInstructor,
};
