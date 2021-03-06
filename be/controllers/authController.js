const jwt = require("jsonwebtoken");
const { User } = require("../models/userModel");
const { InvalidCredentialsError } = require("../utils/customErrors");
const { JWT_SECRET } = require("../config");

const registerUser = async (req, res) => {
  const { user } = req.body;
  const newUser = new User(user);

  const user123 = await newUser.save();
  console.log("user123:", user123);
  res.status(200).json({ message: "Success" });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    throw new InvalidCredentialsError();
  }

  if (password !== user.password) {
    throw new InvalidCredentialsError();
  }

  const token = jwt.sign(
    {
      _id: user._id,
    },
    JWT_SECRET
  );

  res.status(200).json({
    message: "Success",
    accessToken: token,
  });
};

module.exports = {
  registerUser,
  loginUser,
};
