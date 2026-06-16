const User = require("./user.model");

/*
   Get All Users */

const getAllUsers = async (query) => {
  const page = Number(query.page) || 1;

  const limit = Number(query.limit) || 10;

  const skip = (page - 1) * limit;

  const search = query.search;

  const role = query.role;

  const isActive = query.isActive;

  const sortBy = query.sortBy || "createdAt";

  const sortOrder = query.sortOrder === "asc" ? 1 : -1;

  /* Filters */

  const filters = {};

  if (role) {
    filters.role = role;
  }

  if (isActive !== undefined) {
    filters.isActive = isActive === "true";
  }

  /* Search */

  if (search) {
    filters.$or = [
      {
        fullName: {
          $regex: search,
          $options: "i",
        },
      },

      {
        email: {
          $regex: search,
          $options: "i",
        },
      },
    ];
  }

  /* Query */

  const result = await User.find(filters)
    .sort({ [sortBy]: sortOrder })
    .skip(skip)
    .limit(limit);

  /* Total */

  const total = await User.countDocuments(filters);

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
   Get Single User */

const getSingleUser = async (id) => {
  const result = await User.findById(id);

  if (!result) {
    throw new Error("User not found");
  }

  return result;
};

/*
   Update User Role */

const updateUserRole = async (id, payload) => {
  const user = await User.findById(id);

  if (!user) {
    throw new Error("User not found");
  }

  user.role = payload.role;

  await user.save();

  return user;
};

/*
   Update User Status */

const updateUserStatus = async (id, payload) => {
  const user = await User.findById(id);

  if (!user) {
    throw new Error("User not found");
  }

  user.isActive = payload.isActive;

  await user.save();

  return user;
};

/*
   Delete User */

const deleteUser = async (id) => {
  const user = await User.findById(id);

  if (!user) {
    throw new Error("User not found");
  }

  await User.findByIdAndDelete(id);

  return null;
};

module.exports = {
  getAllUsers,
  getSingleUser,
  updateUserRole,
  updateUserStatus,
  deleteUser,
};
