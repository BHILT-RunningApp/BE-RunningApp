const usersRouter = require('express').Router();
const getAllUsers = require('../controllers/userController')
const seedUsers = require("../controllers/userController.js");

// usersRouter.route("/", seedUsers).get(getAllUsers);

usersRouter.route("/").get(getAllUsers).all(console.log('make a error handler'));

module.exports = usersRouter
