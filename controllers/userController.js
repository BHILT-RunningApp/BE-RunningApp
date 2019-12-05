const { usersData } = require("../db/data/development-data/index.js");
const { UserModel } = require("../db/schemas/mongooseUserModel.js");
const { fetchUsers } = require("../models/usersModel.js")

// const userController = (req, res) => {
//   console.log("Inside User Controller ...");
//   res.send('API')
// };

const seedUsers = (req, res) => {
  console.log("USERSDATA ->", usersData);
  usersData.forEach(user => {
    const newUser = new UserModel(user);
    newUser.save();
  });
  console.log("Seeded Users");
};


const getAllUsers = (req, res, next) => {
  fetchUsers().then(users => {
    res.status(200).json({ users })
  }).catch(next)
}



module.exports = { seedUsers, getAllUsers };
