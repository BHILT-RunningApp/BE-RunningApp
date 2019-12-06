const usersRouter = require('express').Router();
const { getAllUsers } = require('../controllers/userController.js')
const seedUsers = require("../controllers/userController.js");

// usersRouter.route("/", seedUsers).get(getAllUsers);

usersRouter.route("/").get(getAllUsers)

module.exports = usersRouter
