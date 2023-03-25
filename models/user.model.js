require("dotenv").config();
const { default: mongoose } = require("mongoose");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username must be provided"],
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password must be provided"],
  },
  todos: {
    type: Number,
    default: 0,
  },
});

UserSchema.methods.createJWT = async function () {
  const token = await jwt.sign(
    { user_id: this._id, username: this.username },
    process.env.JWT_SECRET,
    { expiresIn: "30d" }
  );
  return token;
};

module.exports = mongoose.model("User", UserSchema);
