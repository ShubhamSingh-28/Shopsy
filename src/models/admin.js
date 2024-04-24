import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },

    // auth_id: {
    //   type: String,
    // },
  },
  {
    timestamps: true,
  }
);
const adminAccountsModel = mongoose.model("adminAccounts", adminSchema);
export default adminAccountsModel;