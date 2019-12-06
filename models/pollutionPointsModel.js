const { PollutionPointsModel } = require('../db/schemas/mongoosePollutionPointsModel')

const fetchPollutionPoints = () => {
    return PollutionPointsModel.find({}, (err, docs) => {
        if (err) console.log(err);
        return docs
    })
}

module.exports = { fetchPollutionPoints }