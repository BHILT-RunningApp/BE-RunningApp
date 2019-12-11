const usersRouter = require('express').Router();
const { getAllUsers, addUser, updateUser } = require('../controllers/userController.js')
const { methodNotAllowed } = require('../utils/errorHandler')

usersRouter.route("/").get(getAllUsers).post(addUser).patch(updateUser).all(methodNotAllowed)

module.exports = usersRouter
