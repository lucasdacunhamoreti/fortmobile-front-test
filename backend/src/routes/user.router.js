const express = require('express');

const userController = require('../controllers/user.controller');

const router = express.Router();

router.get('/', userController.get);
router.post('/', userController.post);
router.get('/:id', userController.getOne);

module.exports = router;