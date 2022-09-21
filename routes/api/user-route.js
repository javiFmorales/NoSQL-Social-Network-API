const router = require('express').Router()
const {
    getAllUsers,
    getUserId,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user');

router.route('/').get(getAllUsers).post(createUser)

router.route('/:id')
.route(getUserId)
.route(deleteUser)
.route(updateUser)

router.route('/:userId/friends').post(addFriend)
router.route('/:userId/friends/:friendId').post(deleteFriend)