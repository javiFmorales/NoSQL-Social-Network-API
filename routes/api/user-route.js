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

router.route('/')
.get(getAllUsers)
.post(createUser)


router.route('/:id')
.get(getUserId)
.delete(deleteUser)
.put(updateUser)


router.route('/:userId/friends/:friendId')
.delete(deleteFriend)
.post(addFriend)

module.exports = router
