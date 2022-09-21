const router = require('express').Router()
const {
    AllThougths,
    createThought,
    getThoughtId,
    deleteThought,
    addReaction,
    deleteReaction,
    updateThought
} = require('../../controllers/thoughts');

router.route('/').get(AllThougths).post(createThought)

router.route('/:id')
.route(getThoughtId)
.route(deleteThought)
.route(updateThought)

router.route('/:thoughtId/reactions').post(addReaction)
router.route('/:thoughtId/reactions/:reactionId').post(deleteReaction)