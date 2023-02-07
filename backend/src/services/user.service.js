const { User } = require('../models');

const get = async () => {
    const result = await User.findAll();
    return result;
}

module.exports = {
    get
}