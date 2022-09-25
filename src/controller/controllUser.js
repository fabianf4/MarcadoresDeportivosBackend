module.exports = {
    createUser: async (req,res) => {
        const {name,lastname, email, username, password } = req.body
        res.status(200).json({
            name,
            lastname,
            email,
            username,
            password
        })
    },
    getUserByUuid: async (req,res) => {
        const uuid = req.params.uuid
        res.status(200).json({
            uuid
        })
    },
    updateUser: async (req,res) => {
        const uuid = req.params.uuid
        res.status(200).json({
            uuid
        })
    },
    deleteUserByUuid: async (req,res) => {
        const uuid = req.params.uuid
        res.status(200).json({
            uuid
        })
    },
    getAllUsers: async (req,res) => {
        res.status(200).json({
            ok: 'Todos los usuarios'
        })
    }
    
}