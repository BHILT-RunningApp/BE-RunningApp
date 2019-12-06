const express = require("express");
const apiRouter = express.Router();
const usersRouter = require('./usersRouter')
const pollutionPointsRouter = require('./pollutionPointsRouter')




apiRouter.use("/users", usersRouter);
apiRouter.use('/pollution-points', pollutionPointsRouter)


module.exports = apiRouter;
