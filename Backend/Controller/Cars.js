const upload = require("../Middleware/Multer");
const car = require("./Carschema");

const createcar = async (req, res) => {
  try {
    upload.single("image")(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ message: err.message });
      }

      const { model, year, cost, brand } = req.body;
      const newCar = new car({
        model,
        year,
        cost,
        brand,
        image: req.file ? req.file.filename : null,
      });

      await newCar.save();
      res
        .status(201)
        .json({ message: "Car created successfully", car: newCar });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getsinglecar = async (req, res) => {
  const details = req.params.id;
  const get = await car.findById(details);

  res.json(get);
};

const getallcar = async (req, res) => {
  const get = await car.find();
  res.json(get);
};

const getcarmodel = async (req, res) => {
  const { brand } = req.params;
  const get = await car.find({ brand });
  res.json(get);
};

const deletecar = async (req, res) => {
  const details = req.params.id;
  const deletecar = await car.findByIdAndDelete(details);
  res.json(deletecar);
};

const updatecar = async (req, res) => {
  const { id } = req.params; // Assuming the ID is passed as a route parameter

  try {
    const updatedcar = await car.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedcar) {
      return res.status(404).json({ message: "Car not found" });
    }

    return res
      .status(200)
      .json({ message: "Car details updated successfully", car: updatedcar });
  } catch (error) {
    console.error("Error updating car details:", error);
    return res.status(500).json({ message: "Error updating car details" });
  }
};

module.exports = {
  createcar,
  getsinglecar,
  getallcar,
  deletecar,
  updatecar,
  getcarmodel,
};
