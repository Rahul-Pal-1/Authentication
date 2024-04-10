const User = require('../model/user');
const bcrypt = require('bcrypt');

async function handleGetAllUser(req, res){
    try{
        const users = await User.find({});
        return res.json(users);
    }catch(e){
        return res.err(e);
    }
}

module.exports = {
    handleGetAllUser,
}