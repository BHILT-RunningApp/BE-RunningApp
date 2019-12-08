const { usersData } = require("../db/data/development-data/index.js");
const { UserModel } = require("../db/schemas/mongooseUserModel.js");
const { fetchUsers, postUser } = require("../models/usersModel.js")
const mongoose = require('mongoose')


const seedUsers = (req, res) => {
  mongoose.connection.dropCollection('users', (err, result) => {
    if (err) {
      console.log("error delete collection");
    }
  })
  usersData.forEach(user => {
    const newUser = new UserModel(user);
    newUser.save();
  });
  console.log("Seeded Users");
  res.send('seeded users!')
};


const getAllUsers = (req, res, next) => {
  fetchUsers().then(users => {
    res.status(200).json({ users })
  }).catch(next)
}

const addUser = (req, res, next) => {
  const newUser = req.body;
  // console.log('before the controller', newUser)
  postUser(newUser).then(user => {
    res.status(201).json({ user })
  }).catch(next)
}

module.exports = { seedUsers, getAllUsers, addUser };
