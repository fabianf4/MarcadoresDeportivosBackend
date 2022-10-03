const modelEvent = require("../models/modelEvent")

module.exports = {
  createEvent: async (req, res) => {
    try {
      const event = new modelEvent(req.body)
      await event.save()

      res.status(200).json({
        result: true,
        event
      })
    } catch (error) {
      res.status(500).json({
        result: false,
        error
      })
    }
  },
  updateEvent: async (req, res) => {
    try {
      const id = req.body.id
      const event = await modelEvent.findByIdAndUpdate(id, req.body)

      res.status(200).json({
        result: true,
        event
      })
    } catch (error) {
      res.status(500).json({
        result: false,
        error
      })
    }
  },
  deleteEventById: async (req, res) => {
    try {
      const id = req.body.id
      const event = await modelEvent.findByIdAndDelete(id)

      res.status(200).json({
        result: true,
        event
      })
    } catch (error) {
      res.status(500).json({
        result: false,
        error
      })
    }
  },
  getAllEvent: async (req, res) => {
    try {
      const event = await modelEvent.find()
      res.status(200).json({
        result: true,
        event
      })
    } catch (error) {
      res.status(500).json({
        result: false,
        error
      })
    }
  }
}
