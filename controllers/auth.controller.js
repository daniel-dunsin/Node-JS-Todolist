const asyncHandler = require("../utils/async.handler");
const register = asyncHandler(async (req, res, next) => {
  console.log("Route exist");
});

const login = asyncHandler(async (req, res, next) => {
  console.log("Route exist");
});

module.exports = {
  register,
  login,
};
