const router = require('express').Router();
const userRouter = require('./user-route');
const thoughtRouter = require('./thought-route')

router.use('/users', userRouter)
router.use('/thoughts', thoughtRouter)

module.exports = router