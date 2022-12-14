const modelTeam = require("../models/modelTeam")

module.exports = {
  createTeam: async (req, res) => {
    try {
      const team = new modelTeam(req.body)
      await team.save()

      res.status(200).json({
        result: true,
        team
      })
    } catch (error) {
      res.status(500).json({
        result: false,
        error
      })
    }
  },
  getAllTeams: async (req, res) => {
    try {
      const team = await modelTeam.find()
      res.status(200).json({
        result: true,
        team
      })
    } catch (error) {
      res.status(500).json({
        result: false,
        error
      })
    }
  },
  updateTeam: async (req, res) => {
    const id = req.body.id
    try {
      const team = await modelTeam.findByIdAndUpdate(id, req.body)
      res.status(200).json({
        result: true,
        team
      })
    } catch (error) {
      res.status(500).json({
        result: false,
        error
      })
    }
  },
  deleteTeamByUuid: async (req, res) => {
    const id = req.body.id
    try {
      const team = await modelTeam.findByIdAndDelete({ _id: id })
      res.status(200).json({
        result: true,
        team
      })
    } catch (error) {
      res.status(500).json({
        result: false,
        error
      })
    }
  }
}
