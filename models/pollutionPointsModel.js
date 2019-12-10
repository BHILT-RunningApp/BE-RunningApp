const {
  PollutionPointsModel
} = require('../db/schemas/mongoosePollutionPointsModel');

const fetchPollutionPoints = () => {
  return PollutionPointsModel.find({}, (err, docs) => {
    if (err) console.log(err);
    return docs;
  });
};


const geoJSONPollutionPoints = pollutionPoints => {
  return pollutionPoints.map(pollutionPoint => {
    const rObj = {};
    rObj.type = 'Feature';
    rObj.properties = {};
    rObj.geometry = {
      type: 'Point',
      coordinates: [
        pollutionPoint.pp_coordinates.long,
        pollutionPoint.pp_coordinates.lat
      ]
    };
    return rObj;
  });
};

const fetchOnePollutionPoint = (_id) => {
    return PollutionPointsModel.findById(_id, (err, docs) => {
        if (err) console.log(err);
        return docs
    })
}

module.exports = { fetchPollutionPoints, geoJSONPollutionPoints, fetchOnePollutionPoint };



