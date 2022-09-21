const { Thought, User } = require('../models');

const AllThougths = {
    getAllThoughts(req, res) {
        Thought.find({})
            .then((thoughtData) => res.json(thoughtData))
            .catch((err) => {
                console.log(err)
                res.status(500).json(err)
            })
    },
    createThought({ params, body }, res) {
        Thought.create(body)
            .then(({ _id }) => {
                return User.findOneAndUpdate(
                    { _id: body.userId },
                    { $push: { thoughts: _id } },
                    { new: true }
                )
            })
            .then((userData) => {
                if (!userData) {
                    res.status(404).json({ message: 'no user has been found' })
                    return
                }
                res.json(userData)

            })
            .catch((err) => res.json(err))
    },
    getThoughtId({ params, body }, res) {
        Thought.findOne({ _id: params.id })
            .then((thoughtData) => res.json(thoughtData))
            .catch((err) => {
                console.log(err)
                res.status(500).json(err)
            })
    },
    deleteThought({ params, body }, res) {
        Thought.findOneAndDelete({ _id: params.id })
            .then(() => res.status(200).json({ message: 'The user has been deleted' }))
            .catch((err) => res.status(500).json(err))
    },
    addReaction({ params, body }, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            { $push: { reactions: body } },
            { new: true, runValidators: true }
        )
            .then(() => res.status(200).json({ message: 'Your reaction has been added' }))
            .catch((err) => res.status(400).json(err))
    },
    deleteReaction({ params, body }, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId }, 
            { $pull: { reactions: {reactionId: params.reactionId }}},
            { new: true, runValidators: true }
        )
            .then(() => res.status(200).json({ message: 'your reaction has been deleted' }))
            .catch((err) => res.status(500).json(err))
    },
    updateThought({ params, body }, res) {
        Thought.findOneAndUpdate(
            { _id: params.id }, body, {
                new: true, runValidators: true
            })
                .then(() => res.status(200).json({ message: 'your thought has been updated' }))
                .catch((err) => res.status(500).json(err))
    }
}
module.exports = AllThougths




