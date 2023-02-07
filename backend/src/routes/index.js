const express = require('express');

const routers = express.Router();

const userRouter = require('./user.router');

routers.use('/users', userRouter)

module.exports = routers;