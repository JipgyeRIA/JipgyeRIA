const mongoose = require("mongoose");
const { Schema } = mongoose;

const setMenuSchema = new Schema({
  compose: [{ type: Schema.Types.ObjectId, ref: "Menu" }],
  price: Number,
  sales: [Number],
});

module.exports = mongoose.model("SetMenu", setMenuSchema);
