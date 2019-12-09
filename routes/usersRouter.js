const usersRouter = require('express').Router();
const { getAllUsers, addUser, updateUser } = require('../controllers/userController.js')


usersRouter.route("/").get(getAllUsers).post(addUser).patch(updateUser)

module.exports = usersRouter
