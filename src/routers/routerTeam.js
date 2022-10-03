const {Router} = require ('express');
const controllTeam = require ('../controller/controllTeam')
const router = new Router()

//Create team
router.post('/',controllTeam.createTeam)
//Update team by id
router.put('/',controllTeam.updateTeam)
//Delete team by id
router.delete('/', controllTeam.deleteTeamByUuid)
//Get all teams
router.get('/',controllTeam.getAllTeams)

module.exports = router