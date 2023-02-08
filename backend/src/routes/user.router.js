const express = require('express');

const userController = require('../controllers/user.controller');

const router = express.Router();

router.get('/', userController.get);
router.post('/', userController.post);
router.get('/:id', userController.getOne);
router.put('/:id', userController.update);
router.delete('/:id', userController.destroy);

module.exports = router;