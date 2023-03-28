require("dotenv").config();
const asyncHandler = require("../utils/async.handler");
const { CustomError } = require("../utils/errors");
const bcrypt = require("bcryptjs");
const User = require("../models/user.model");

const register = asyncHandler(async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return next(new CustomError("Please provide username and password", 400));
  }

  //   hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    username,
    password: hashedPassword,
  });

  const token = await user.createJWT();

  res.status(201).send({ username: user.username, token });
});

const login = asyncHandler(async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return next(new CustomError("Please provide username and password", 400));
  }

  const user = await User.findOne({ username });

  if (!user) {
    return next(new CustomError("User doesn't exist", 404));
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    return next(new CustomError("Wrong Password", 400));
  }
  const token = await user.createJWT();

  res.status(200).send({ username: user.username, token });
});

module.exports = {
  register,
  login,
};
