const { UserModel } = require('../db/schemas/mongooseUserModel')


const fetchUsers = () => {
    return UserModel.find({}, (err, docs) => {
        if (err) console.log(err);
        return docs
    })
}

module.exports = { fetchUsers }