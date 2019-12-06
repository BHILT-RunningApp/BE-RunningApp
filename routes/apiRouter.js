const express = require("express");
const apiRouter = express.Router();
const usersRouter = require('./usersRouter')

const {
  seedPollutionPoints
} = require("../controllers/pollutionPointsController.js");


apiRouter.use("/users", usersRouter);

apiRouter.get("/pollution-points", seedPollutionPoints);

module.exports = apiRouter;
