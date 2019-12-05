const UserModel = require('../db/schemas/mongooseUserModel')

const fetchUsers = () => {
    UserModel.find({}).then(users => {
        console.log(users)
    })
}

module.exports = { fetchUsers }