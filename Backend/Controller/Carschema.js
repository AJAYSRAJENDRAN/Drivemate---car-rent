const mongoose = require("mongoose");

const carschema = mongoose.Schema({
  model: { type: String },
  year: { type: String },
  cost: { type: String },
  image: { type: String },
  brand: { type: String },
});
const car = mongoose.model("car", carschema);
module.exports = car;
