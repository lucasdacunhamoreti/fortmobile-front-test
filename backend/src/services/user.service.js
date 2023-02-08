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
    const result = await User.findOne({ where: { id } });
    
    return result;
}

const update = async (id, userData) => {
    const { name, cpf, phoneNumber, email } = userData;
    const result = await User.update({
        name,
        cpf,
        phoneNumber,
        email
    }, { where: { id } });
    
    return result;
}

const destroy = async (id) => {
    const result = await User.destroy({ where: { id } });
    
    return result;
}

module.exports = {
    get,
    post,
    getOne,
    update,
    destroy
}