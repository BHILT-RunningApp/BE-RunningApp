const pollutionPointsRouter = require('express').Router();
const { getPollutionPoints } = require('../controllers/pollutionPointsController')


pollutionPointsRouter.route('/').get(getPollutionPoints)

module.exports = pollutionPointsRouter