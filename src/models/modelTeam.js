const mongoose = require("mongoose")

const modelTeam = new mongoose.Schema({
  name: {
    type: String,
    requiered: true,
    unique: true
  }
})

module.exports = mongoose.model("modelTeam", modelTeam)
