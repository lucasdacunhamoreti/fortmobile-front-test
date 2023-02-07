const userService = require('../services/user.service');

const get = async (_req, res) => {
    const usersGroup = await userService.get();
    return res.status(200).json(usersGroup);
}

module.exports = {
    get
}