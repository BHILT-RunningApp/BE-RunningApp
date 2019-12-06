const pollutionPointsRouter = require('express').Router();
const { getPollutionPoints, seedPollutionPoints } = require('../controllers/pollutionPointsController')


pollutionPointsRouter.route('/').get(getPollutionPoints)

module.exports = pollutionPointsRouter