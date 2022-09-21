const { User } = require('../models')

const allUsers = {
    getAllUsers(req, res) {
        User.find({})
            .populate({
                path: 'thoughts'
            })
            .then((userData) => res.json(userData))
            .catch((err) => {
                console.log(err)
                res.status(500).json(err)
            })
    },
    getUserId({ params, body }, res) {
        User.findOne({ _id: params.id })
            .populate({
                path: 'thoughts'
            })
            .populate({
                path: 'friends'
            })
            .then((userData) => res.json(userData))
            .catch((err) => {
                console.log(err)
                res.status(500).json(err)
            })
    },

    createUser({ params, body }, res) {
        User.create(body)
            .then((userData) => res.json(userData))
            .catch((err) => res.status(500).json(err))
    },
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, {
            new: true,
            runValidators: true
        })
            .then(() => res.status(200).json({ message: 'Your user has been updated' }))
            .catch((err) => res.status(400).json(err))

    },

    deleteUser({ params, body }, res) {
        User.findOneAndDelete({ _id: params.id })
            .then(() => res.status(200).json({ message: 'The user has been deleted' }))
            .catch((err) => res.status(500).json(err))

    },
    addFriend({ params, body }, res) {
        Thought.findOneAndUpdate(
            { _id: params.userId },
            { $push: { friends: params.friendId } },
            { new: true, runValidators: true }
        )
            .then(() => res.status(200).json({ message: 'Your friend has been added' }))
            .catch((err) => res.status(400).json(err))

    },
    deleteFriend({ params, body }, res) {
        Thought.findOneAndUpdate(
            { _id: params.userId },
            { $pull: { friends: params.friendId } },
            { new: true }
        )
            .then((userData) => res.json(userData))
            .catch((err) => res.status(400).json(err))
    }
}

module.exports = allUsers