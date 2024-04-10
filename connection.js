const mongoose = require('mongoose');
const env = require('dotenv');


env.config();
const URI = process.env.URI

function conn(){
    return mongoose.connect(URI)
}

module.exports = {conn};