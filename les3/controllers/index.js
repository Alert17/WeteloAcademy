const { Router } = require('express');
const userController = require('./user');

const router = Router();

router.use('/users', userController);

module.exports = router;