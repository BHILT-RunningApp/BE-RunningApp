const {
  fetchPollutionPoints,
  geoJSONPollutionPoints
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
      res.status(200).json({ geoJSONAndPollutionPoints });
    })
    .catch(next);
};

module.exports = { getPollutionPoints };
