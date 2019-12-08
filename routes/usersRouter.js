const usersRouter = require('express').Router();
const { getAllUsers, seedUsers, addUser, updateUser } = require('../controllers/userController.js')

// usersRouter.route("/", seedUsers).get(getAllUsers);

usersRouter.route("/").get(getAllUsers).post(addUser).patch(updateUser)

module.exports = usersRouter
