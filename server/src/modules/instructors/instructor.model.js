const mongoose = require("mongoose");

const instructorSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    instructorCode: {
      type: String,
      unique: true,
    },
    specialization: {
      type: String,
      enum: ["English", "computer", "other"],
      default: "English",
    },

    assignedClasses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Class",
      },
    ],

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

const Instructor = mongoose.model("Instructor", instructorSchema);

module.exports = Instructor;
