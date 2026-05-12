const mongoose = require("mongoose");

const curriculumSchema = new mongoose.Schema(
  {
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    sessionTopics: [
      {
        topicTitle: {
          type: String,
          required: true,
        },

        learningObjective: {
          type: String,
          required: true,
        },

        sequence: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Curriculum", curriculumSchema);
