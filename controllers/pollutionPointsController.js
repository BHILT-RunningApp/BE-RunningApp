const {
  fetchPollutionPoints,
  geoJSONPollutionPoints,
  fetchOnePollutionPoint
} = require('../models/pollutionPointsModel.js');


const getPollutionPoints = (req, res, next) => {
  fetchPollutionPoints()
    .then(pollutionPoints => {
      const geoJSON = geoJSONPollutionPoints(pollutionPoints);
      const geoJSONAndPollutionPoints = {
        type: 'FeatureCollection',
        features: geoJSON,
        pollutionPoints: pollutionPoints
      };
      res.status(200).json({ geoJSONAndPollutionPoints });
    })
    .catch(next);
};

const getOnePollutionPoint = (req, res, next) => {
  const { id } = req.params
  fetchOnePollutionPoint(id).then(pollutionPoint => {
    res.status(200).json({ pollutionPoint })
  }).catch(next)
}

module.exports = { getPollutionPoints, getOnePollutionPoint };
