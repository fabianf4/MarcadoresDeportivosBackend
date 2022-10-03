const modelUser = require("../models/modelUser")

module.exports = {
  createUser: async (req, res) => {
    try {
      const user = new modelUser(req.body)
      await user.save()

      res.status(200).json({
        result: true,
        user
      })
    } catch (error) {
      res.status(500).json({
        result: false,
        error
      })
    }
  },
  getUserByUuid: async (req, res) => {
    const uuid = req.body.uuid
    try {
      const user = await modelUser.find({ uuid })
      res.status(200).json({
        result: true,
        user
      })
    } catch (error) {
      res.status(500).json({
        result: false,
        error
      })
    }
  },
  updateUser: async (req, res) => {
    const uuid = req.body.uuid

    try {
      const user = await modelUser.findOneAndUpdate({ uuid }, req.body )
      res.status(200).json({
        result: true,
        user
      })
    } catch (error) {
      res.status(500).json({
        result: false,
        error
      })
    }
  },
  deleteUserByUuid: async (req, res) => {
    try {
      const uuid = req.body.uuid
      const user = await modelUser.findOneAndDelete({uuid})
      
      res.status(200).json({
        result: true,
        user
      })
    } catch (error) {
      res.status(200).json({
        result: false,
        error
      })
    }
  },
  getAllUsers: async (req, res) => {
    try {
      const users = await modelUser.find()
      res.status(200).json({
        result: true,
        users
      })
    } catch (error) {
      res.status(500).json({
        result: false,
        error
      })
    }
  }
}
