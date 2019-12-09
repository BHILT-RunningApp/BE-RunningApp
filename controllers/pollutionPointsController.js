
const { fetchPollutionPoints, fetchOnePollutionPoint } = require("../models/pollutionPointsModel.js");


const getPollutionPoints = (req, res, next) => {
  fetchPollutionPoints()
    .then(pollutionPoints => {
      res.status(200).json({ pollutionPoints });
    })
    .catch(next);
};

const getOnePollutionPoint = (req, res, next) => {
  const { id } = req.params
  fetchOnePollutionPoint(id).then(pollutionPoint => {
    res.status(200).json({ pollutionPoint })
  })
}

module.exports = { getPollutionPoints, getOnePollutionPoint };
