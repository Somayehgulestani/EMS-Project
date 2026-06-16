const userService = require("./user.service");

const catchAsync = require("../../utils/catchAsync");

/*
   Get All Users */

const getAllUsers = catchAsync(async (req, res) => {
  const result = await userService.getAllUsers(req.query);

  res.status(200).json({
    success: true,
    message: "Users retrieved successfully",
    meta: result.meta,
    data: result.data,
  });
});

/*
   Get Single User */

const getSingleUser = catchAsync(async (req, res) => {
  const result = await userService.getSingleUser(req.params.id);

  res.status(200).json({
    success: true,
    message: "User retrieved successfully",
    data: result,
  });
});

/*
   Update User Role */

const updateUserRole = catchAsync(async (req, res) => {
  const result = await userService.updateUserRole(req.params.id, req.body);

  res.status(200).json({
    success: true,
    message: "User role updated successfully",
    data: result,
  });
});

/*
   Update User Status */

const updateUserStatus = catchAsync(async (req, res) => {
  const result = await userService.updateUserStatus(req.params.id, req.body);

  res.status(200).json({
    success: true,
    message: "User status updated successfully",
    data: result,
  });
});

/*
   Delete User */

const deleteUser = catchAsync(async (req, res) => {
  await userService.deleteUser(req.params.id);

  res.status(200).json({
    success: true,
    message: "User deleted successfully",
  });
});

module.exports = {
  getAllUsers,
  getSingleUser,
  updateUserRole,
  updateUserStatus,
  deleteUser,
};
