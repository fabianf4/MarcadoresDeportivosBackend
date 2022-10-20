const { Router } = require("express")
const controllTeam = require("../controller/controllTeam")
const router = new Router()
const validateToken = require("../validator/validatorToken")
//Create team
router.post("/", validateToken, controllTeam.createTeam)
//Update team by id
router.put("/", validateToken, controllTeam.updateTeam)
//Delete team by id
router.delete("/", validateToken, controllTeam.deleteTeamByUuid)
//Get all teams
router.get("/", validateToken, controllTeam.getAllTeams)

module.exports = router
