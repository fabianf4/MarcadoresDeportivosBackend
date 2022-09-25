module.exports = {
    createTeam: async (req,res) => {
        const {name, numPlayes, creationDate } = req.body
        res.status(200).json({
            name,
            numPlayes,
            creationDate
        })
    },
    getTeamByUuid: async (req,res) => {
        const uuid = req.params.uuid
        res.status(200).json({
            uuid
        })
    },
    updateTeam: async (req,res) => {
        const uuid = req.params.uuid
        res.status(200).json({
            uuid
        })
    },
    deleteTeamByUuid: async (req,res) => {
        const uuid = req.params.uuid
        res.status(200).json({
            uuid
        })
    },
    getAllTeams: async (req,res) => {
        res.status(200).json({
            ok: 'Todos los equipos'
        })
    }
}