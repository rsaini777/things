const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    contact: {
      type: Number,
      required: true,
    },
    subjects: [],

    classes: {
      type: String,
      required: true,
    },
    society: {
      type:String,
      default:null,
    },

    year: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", UserSchema);
