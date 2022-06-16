const mongoose = require("mongoose");
const { Schema } = mongoose;

const menuSchema = new Schema({
  menuId: Schema.Types.ObjectId,
  name: String,
  compose: String,
  price: Number,
  img: String,
  compose: String,
  category: [String],
  servings: Number,
  salesCount: [Number],
});

module.exports = mongoose.model("Menu", menuSchema);
