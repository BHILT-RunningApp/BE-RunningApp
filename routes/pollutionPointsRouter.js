const pollutionPointsRouter = require('express').Router();
const { getPollutionPoints, getOnePollutionPoint } = require('../controllers/pollutionPointsController')
const { methodNotAllowed } = require('../utils/errorHandler.js')

pollutionPointsRouter.route('/').get(getPollutionPoints).all(methodNotAllowed)
pollutionPointsRouter.route('/:id').get(getOnePollutionPoint).all(methodNotAllowed)

module.exports = pollutionPointsRouter