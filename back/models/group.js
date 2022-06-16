const mongoose = require("mongoose");
const { Schema } = mongoose;

const groupSchema = new Schema({
  groupId: Schema.Types.ObjectId,
  total: Number,
  malesCount: Number,
  femalesCount: Number,
  averageAge: Number,
  maxAge: Number,
  minAge: Number,
  orders: [{ type: Schema.Types.ObjectId, ref: "Menu" }],
  customers: [{ type: Schema.Types.ObjectId, ref: "Customer" }],
});

module.exports = mongoose.model("Group", groupSchema);
