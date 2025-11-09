import mongoose from "mongoose";
import gender from "../enums/gender.enum.js";
import mapEnumValues from "../helpers/mapenumvalues.js";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      lowercase: true,
      default: undefined,
      index: true,
    },
    email_verified_at: {
      type: Date,
      default: null,
    },
    email_validity: {
      type: Boolean,
      default: true,
    },
    gender: {
      type: String,
      enum: mapEnumValues(gender),
      default: gender.Other,
      index: true,
    },
    fisrt_login_at: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);
export default User;
