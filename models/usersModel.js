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

// const patchUser = update => {
//     const { username, current_location } = update
//     return UserModel.updateOne({ username }, { current_location }, (err, docs) => {
//         if (err) console.log(err)
//         return docs
//     })
// }

const patchUser = update => {
    const { username, current_location } = update
    return UserModel.findOneAndUpdate({ username }, { current_location }, { "new": true })
        .then(docs => {
            return docs;
        })
}




module.exports = { fetchUsers, postUser, patchUser }