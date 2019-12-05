const mongoose = require("mongoose");
const usersSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  email: String,
  password: String,
  current_location: String
});

const UserModel = mongoose.model("User", usersSchema);

exports.UserModel = UserModel;
