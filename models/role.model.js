import mongoose from "mongoose";

const roleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: "User",
      lowercase: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Role = mongoose.model("Role", roleSchema);
export { Role };
export default Role;
