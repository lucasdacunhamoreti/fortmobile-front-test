const { User } = require('../models');

const get = async () => {
    const result = await User.findAll();
    return result;
}

const post = async (userData) => {
    const { name, cpf, phoneNumber, email } = userData;
    const result = await User.create({
        name,
        cpf,
        phoneNumber,
        email
    });
    
    return result;
}

const getOne = async (id) => {
    const result = await User.findOne({
        id
    });
    
    return result;
}

module.exports = {
    get,
    post,
    getOne
}