const { default: mongoose } = require("mongoose");

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
  },
});

module.exports = mongoose.model("User", UserSchema);
