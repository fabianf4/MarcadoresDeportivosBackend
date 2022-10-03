const modellSport = require("../models/modelSport")

module.exports = {
  createSport: async (req, res) => {
    try {
      const sport = new modellSport(req.body)
      await sport.save()

      res.status(200).json({
        result: true,
        sport
      })
    } catch (error) {
      res.status(500).json({
        result: false,
        error
      })
    }
  },
  getAllSport: async (req, res) => {
    try {
      const sport = await modellSport.find()
      res.status(200).json({
        result: true,
        sport
      })
    } catch (error) {
      res.status(500).json({
        result: false,
        error
      })
    }
  },
  updateSport: async (req, res) => {
    const id = req.body.id
    try {
      const sport = await modellSport.findByIdAndUpdate(id, req.body)
      res.status(200).json({
        result: true,
        sport
      })
    } catch (error) {
      res.status(500).json({
        result: false,
        error
      })
    }
  },
  deleteSportById: async (req, res) => {
    const id = req.body.id
    try {
      const sport = await modellSport.findByIdAndDelete({ _id: id })
      res.status(200).json({
        result: true,
        sport
      })
    } catch (error) {
      res.status(500).json({
        result: false,
        error
      })
    }
  }
}
