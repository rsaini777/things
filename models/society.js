const mongoose = require("mongoose");
const SocietySchema = new mongoose.Schema(
  {
    society: {
      type: String,
      default: 0,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Society", SocietySchema);
