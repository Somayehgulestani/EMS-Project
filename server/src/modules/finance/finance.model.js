const mongoose = require("mongoose");

const financeSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },

    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },

    totalFee: {
      type: Number,
      required: true,
    },

    paidAmount: {
      type: Number,
      default: 0,
    },

    discount: {
      type: Number,
      default: 0,
    },

    dueAmount: {
      type: Number,
      default: 0,
    },

    paymentStatus: {
      type: String,
      enum: ["paid", "partial", "unpaid"],
      default: "unpaid",
    },

    installments: [
      {
        amount: Number,

        paymentDate: {
          type: Date,
          default: Date.now,
        },

        note: String,
      },
    ],
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Finance", financeSchema);
