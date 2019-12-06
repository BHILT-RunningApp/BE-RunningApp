const { pollutionPointsData } = require("../db/data/development-data/index.js");
const {
  PollutionPointsModel
} = require("../db/schemas/mongoosePollutionPointsModel.js");

//Format pollution points data so that the aqi scores are calculated, add as a util function

const seedPollutionPoints = (req, res) => {
  pollutionPointsData.forEach(pollutionPoint => {
    const newPollutionPoint = new PollutionPointsModel(pollutionPoint);
    newPollutionPoint.save();
  });

  res.send("Seeded Pollution Points");
};

module.exports = { seedPollutionPoints };
