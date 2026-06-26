const mongoose = require("mongoose");

const instructorSchema = new mongoose.Schema(
  {
    /* User */

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    /* Instructor Code */

    instructorCode: {
      type: String,
      unique: true,
      required: true,
    },

    /* Specialization */

    specialization: {
      type: String,
      enum: ["English", "Computer", "Other"],
      default: "English",
    },

    /* Salary */

    salaryType: {
      type: String,
      enum: ["monthly", "percentage", "perClass"],
      default: "monthly",
    },

    salary: {
      monthlyAmount: {
        type: Number,
        default: null,
      },

      percentage: {
        type: Number,
        default: null,
      },

      classAmount: {
        type: Number,
        default: null,
      },
    },

    /* Assigned Classes */

    assignedClasses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Class",
      },
    ],

    /* Status */

    isActive: {
      type: Boolean,
      default: true,
    },

    /* Joining Date */

    joiningDate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Instructor", instructorSchema);
