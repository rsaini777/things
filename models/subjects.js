const mongoose = require("mongoose");
const SubjectSchema = new mongoose.Schema(
  {
    subjects: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Subject", SubjectSchema);
