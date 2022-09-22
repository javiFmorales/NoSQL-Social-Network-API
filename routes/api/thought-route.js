const router = require('express').Router()
const {
    getAllThoughts,
    createThought,
    getThoughtId,
    deleteThought,
    addReaction,
    deleteReaction,
    updateThought
} = require('../../controllers/thoughts');

router.route('/')
.get(getAllThoughts)
.post(createThought)


router.route('/:id')
.get(getThoughtId)
.delete(deleteThought)
.put(updateThought)




router.route('/:thoughtId/reactions/:reactionId')
.post(deleteReaction)
.post(addReaction)

module.exports = router