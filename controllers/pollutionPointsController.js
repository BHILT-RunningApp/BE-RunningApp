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
      // console.log('outputObj ->', outputObj);
      res.status(200).send(geoJSONAndPollutionPoints);
    })
    .catch(next);
};

const getOnePollutionPoint = (req, res, next) => {
  const { id } = req.params;
  fetchOnePollutionPoint(id).then(pollutionPoint => {
    res.status(200).json({ pollutionPoint });
  });
};

module.exports = { getPollutionPoints, getOnePollutionPoint };
