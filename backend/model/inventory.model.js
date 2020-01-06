const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const inventorySchema = new Schema(
  {
    item: { type: String, required: true, trim: true },
    amount: { type: Number, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    img: { type: String, trim: true }
  },
  {
    timestamps: true
  }
);

const Inventory = mongoose.model("Inventory", inventorySchema);

module.exports = Inventory;
