const mongoose = require("mongoose")

const modelEvent = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  sport: {
    type: mongoose.ObjectId,
    required: true
  },
  team1: {
    type: mongoose.ObjectId,
    required: true
  },
  team2: {
    type: mongoose.ObjectId,
    required: true
  },
  scoreboardTeam1: {
    type: Number,
    required: true
  },
  scoreboardTeam2: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model("modelEvent", modelEvent)
