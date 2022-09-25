module.exports = {
    createTeam: async (req,res) => {
        const {date, team1, team2, scoreboardTeam1, scoreboardTeam2 } = req.body
        res.status(200).json({
            date,
            team1,
            team2,
            scoreboardTeam1,
            scoreboardTeam2
        })
    },
    getScoreboardByUuid: async (req,res) => {
        const uid = req.params.uuid
        res.status(200).json({
            uid
        })
    },
    updateScoreboard: async (req,res) => {
        const uid = req.params.uuid
        res.status(200).json({
            uid
        })
    },
    deleteScoreboardByUuid: async (req,res) => {
        const uid = req.params.uuid
        res.status(200).json({
            uid
        })
    },
    getAllScoreboard: async (req,res) => {
        res.status(200).json({
            ok: 'Todos los marcadores'
        })
    }
}