const { pollutionPointsData } = require("../db/data/development-data/index.js");
const {
  PollutionPointsModel
} = require("../db/schemas/mongoosePollutionPointsModel.js");
const { aqiCalculate } = require("../utils/pollutionPointsUtils.js");
const { fetchPollutionPoints } = require('../models/pollutionPointsModel.js')

//Get seedPollutionPoints to run on server start

const seedPollutionPoints = (req, res) => {
  pollutionPointsData.forEach(pollutionPoint => {
    const newPollutionPoint = new PollutionPointsModel(pollutionPoint);
    newPollutionPoint.save();
  });

  res.send("Seeded Pollution Points");
};

const getPollutionPoints = (req, res, next) => {
  fetchPollutionPoints().then(pollutionPoints => {
    res.status(200).json({ pollutionPoints })
  }).catch(next)
}

module.exports = { seedPollutionPoints, getPollutionPoints };
