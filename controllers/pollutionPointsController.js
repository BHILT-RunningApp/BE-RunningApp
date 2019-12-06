const { pollutionPointsData } = require("../db/data/development-data/index.js");
const {
  PollutionPointsModel
} = require("../models/mongoosePollutionPointsModel.js");

const { aqiCalculate } = require("../utils/pollutionPointsUtils.js");

//Get seedPollutionPoints to run on server start

const seedPollutionPoints = (req, res) => {
  pollutionPointsData.forEach(pollutionPoint => {
    const newPollutionPoint = new PollutionPointsModel(pollutionPoint);
    newPollutionPoint.save();
  });

  res.send("Seeded Pollution Points");
};

module.exports = { seedPollutionPoints };
