const { UserModel } = require('../db/schemas/mongooseUserModel')
// const mongoose = require('mongoose')

// const fetchUsers = () => {
//     return UserModel.find({}, function (err, docs) { if (err) return console.log(err) }).then(users => {
//         console.log(users);
//         return users
//     })
// }

const fetchUsers = () => {
    return UserModel.find({}, (err, docs) => {
        if (err) console.log(err);
        return docs
    })
}

module.exports = { fetchUsers }