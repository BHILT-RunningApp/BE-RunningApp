// const { pollutionPointsData } = require("../db/data/development-data/index.js");
// const {
//   PollutionPointsModel
// } = require("../db/schemas/mongoosePollutionPointsModel.js");
const { fetchPollutionPoints } = require("../models/pollutionPointsModel.js");
// const {
//   aqiCalculate,
//   calcLatLong
// } = require("../utils/pollutionPointsUtils.js");
// const mongoose = require("mongoose");

// const seedPollutionPoints = (req, res) => {
//   mongoose.connection.dropCollection("pollutionpoints", (err, result) => {
//     if (err) {
//       console.log("error delete collection");
//     }
//   });
//   const updatedPollutionPointsData = aqiCalculate(pollutionPointsData);
//   const pollutionPointsWithCoords = calcLatLong(updatedPollutionPointsData);

//   pollutionPointsWithCoords.forEach(pollutionPoint => {
//     const newPollutionPoint = new PollutionPointsModel(pollutionPoint);
//     newPollutionPoint.save();
//   });
//   res.send("Seeded Pollution Points");
// };

const getPollutionPoints = (req, res, next) => {
  fetchPollutionPoints()
    .then(pollutionPoints => {
      res.status(200).json({ pollutionPoints });
    })
    .catch(next);
};

module.exports = { getPollutionPoints };
