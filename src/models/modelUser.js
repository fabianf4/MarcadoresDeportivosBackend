const mongoose = require("mongoose")

const modelUser = new mongoose.Schema({
  uuid: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  birth: {
    type: Date,
    required: true
  },
  image: {
    type: String
  }
})

module.exports = mongoose.model("modelUser", modelUser)
