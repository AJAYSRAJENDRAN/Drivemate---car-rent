const user = require("./Customerschema");

const getbooking = async (req, res) => {
  try {
    const { customerId } = req.params;

    const customer = await user.findById(customerId).populate("bookings.carId");
    if (!customer) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ bookings: user.bookings });
  } catch (error) {
    console.error("Error retrieving bookings:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = getbooking;
