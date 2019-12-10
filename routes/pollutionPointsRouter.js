const pollutionPointsRouter = require('express').Router();
const { getPollutionPoints, getOnePollutionPoint } = require('../controllers/pollutionPointsController')


pollutionPointsRouter.route('/').get(getPollutionPoints)
pollutionPointsRouter.route('/:id').get(getOnePollutionPoint)

module.exports = pollutionPointsRouter