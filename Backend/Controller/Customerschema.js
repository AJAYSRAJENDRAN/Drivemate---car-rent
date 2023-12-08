const mongoose = require("mongoose");

const customerschema = mongoose.Schema({
  username: { type: String },
  email: { type: String },
  password: { type: String },
  bookings: [
    {
      carId: {
        type: mongoose.Schema.Types.ObjectId,
      },
    },
  ],
});
const user = mongoose.model("customer", customerschema);
module.exports = user;
