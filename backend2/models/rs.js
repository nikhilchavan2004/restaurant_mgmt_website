import mongoose from "mongoose";
import validator from "validator";
const rs = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    minlength: [3, "atleast 3 characters required"],
  },
  lastname: {
    type: String,
    required: true,
    minlength: [3, "atleast 3 characters required"],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "provide a valid email"],
  },
  phone: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});
const rv = mongoose.model("rv", rs);
export default rv;
