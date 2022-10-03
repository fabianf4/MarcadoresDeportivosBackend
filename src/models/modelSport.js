const mongoose = require ('mongoose')

const modelSport = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('modelSport', modelSport)