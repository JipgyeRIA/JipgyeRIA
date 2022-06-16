const mongoose = require("mongoose");
const { Schema } = mongoose;

const customerSchema = new Schema({
  customerId: Schema.Types.ObjectId,
  age: Number,
  gender: Number,
});

module.exports = mongoose.model("Customer", customerSchema);
