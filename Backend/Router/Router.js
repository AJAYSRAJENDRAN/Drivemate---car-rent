const express = require("express");
const protect = require("../Middleware/Token");
const {
  createcar,
  getsinglecar,
  getallcar,
  deletecar,
  updatecar,
  getcarmodel,
} = require("../Controller/Cars");
const upload = require("../Middleware/Multer");
const { signup, login, logout } = require("../Controller/Customer");
const booking = require("../Controller/Booking");
const getbooking = require("../Controller/Getbooking");

const router = express.Router();
const middleware = [protect];

router.route("/create").post(createcar);
router.route("/getsinglecar/:id").get(getsinglecar);
router.route("/getcar").get(getallcar);
router.route("/delete/:id").delete(deletecar);
router.route("/update/:id").put(updatecar);
router.route("/car/:brand").get(getcarmodel);

router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/logout").post(logout);

router.route("/booking").post(booking);
router.route("/booking/:customerId").get(getbooking);

module.exports = router;
