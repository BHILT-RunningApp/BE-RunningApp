const mongoose = require("mongoose");
const usersSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  email: String,
  password: String,
  current_location: String,
  end_location: {
    lat: Number,
    long: Number
  }
});

const UserModel = mongoose.model("User", usersSchema);

module.exports = { UserModel };
