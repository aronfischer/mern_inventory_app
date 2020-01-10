const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const adminSchema = new Schema(
  {
    username: { type: String, trim: true, required: true, unique: true },
    password: { type: String, required: true, minlength: 6, trim: true }
  },
  {
    timestamps: true
  }
);

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
