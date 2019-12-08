const usersRouter = require('express').Router();
const { getAllUsers, seedUsers, addUser } = require('../controllers/userController.js')

// usersRouter.route("/", seedUsers).get(getAllUsers);

usersRouter.route("/").get(getAllUsers).post(addUser)

module.exports = usersRouter
