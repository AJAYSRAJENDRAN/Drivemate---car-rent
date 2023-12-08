const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const user = require("./Customerschema");

const signup = async (req, res) => {
  const { username, email, password, booking } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedpassword = await bcrypt.hash(password, salt);
  const emailcheck = await user.findOne({ email });
  if (emailcheck) {
    res.json("user already exist");
  } else {
    const Userdetails = await user.create({
      username,
      email,
      password: hashedpassword,
      booking,
    });
    res.json(Userdetails);
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  const loginuser = await user.findOne({ username });

  if (loginuser && (await bcrypt.compare(password, loginuser.password))) {
    const customerId = loginuser._id; // Extracting the user ID
    const token = tokengenerate(customerId);
    res.json({ customerId, token }); // Passing both userId and token in response
  } else {
    res.json("failed");
  }
};

const tokengenerate = (id) => {
  return jwt.sign({ id }, process.env.jwt_scret, {
    expiresIn: "1d",
  });
};

const logout = async (req, res) => {
  req.logout();
  res.json({ message: "logout successful" });
};

module.exports = { signup, login, logout };
