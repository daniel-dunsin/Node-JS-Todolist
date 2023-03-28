require("dotenv").config();
const { CustomError } = require("./errors");
const jwt = require("jsonwebtoken");

const isAuth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next(new CustomError("Not authorized", 401));
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return next(new CustomError("Invalid Token", 401));
  }

  const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);
  req.user = { username: decodedToken.username, user_id: decodedToken.user_id };
  next();
};

module.exports = isAuth;
