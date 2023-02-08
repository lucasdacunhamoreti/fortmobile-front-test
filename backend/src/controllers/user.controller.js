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
    const { id } = req.params;
    const user = await userService.getOne(id);
    return res.status(200).json(user);
}

const update = async (req, res) => {
    const { id } = req.params;
    await userService.update(id, req.body);
    return res.status(200).json({ message: 'User updated!' });
}

const destroy = async (req, res) => {
    const { id } = req.params;
    await userService.destroy(id);
    return res.status(204).json({ message: 'User deleted!' });
}

module.exports = {
    get,
    post,
    getOne,
    update,
    destroy
}