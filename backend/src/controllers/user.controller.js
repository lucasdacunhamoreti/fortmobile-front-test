const userService = require('../services/user.service');

const get = async (_req, res) => {
    const usersGroup = await userService.get();
    return res.status(200).json(usersGroup);
}

const post = async (req, res) => {
    const user = await userService.post(req.body);
    return res.status(201).json(user);
}

const getOne = async (req, res) => {
    const { id } = req.body;
    const user = await userService.getOne(id);
    return res.status(200).json(user);
}

module.exports = {
    get,
    post,
    getOne
}