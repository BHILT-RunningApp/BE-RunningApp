const { UserModel } = require('../db/schemas/mongooseUserModel')


const fetchUsers = () => {
    return UserModel.find({}, (err, docs) => {
        if (err) console.log(err);
        return docs
    })
}

const postUser = (newUser) => {
    const userToAdd = new UserModel(newUser)
    return userToAdd.save().then(newUser => {
        return newUser
    })
}



module.exports = { fetchUsers, postUser }