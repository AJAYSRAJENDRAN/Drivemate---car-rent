const user = require("./Customerschema");

const booking = async (req, res) => {
  try {
    // const { userId } = req.params;
    const { carId, customerId } = req.body; // Assuming these are passed in the request body

    const customer = await user.findById(customerId);
    if (!customer) {
      return res.status(404).json({ message: "User not found" });
    }
    const newBooking = {
      carId,
    };

    customer.bookings.push(newBooking);
    await customer.save();
    res.status(201).json({ message: "Booking created successfully" });
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = booking;
