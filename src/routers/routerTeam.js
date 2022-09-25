const {Router} = require ('express');
const controllTeam = require ('../controller/controllTeam')
const router = new Router()

//Create team
router.post('/',controllTeam.createTeam)
//Search team by uid
router.get('/:uuid',controllTeam.getTeamByUuid)
//Update team by uid
router.put('/:uuid',controllTeam.updateTeam)
//Delete team by uid
router.delete('/:uuid', controllTeam.deleteTeamByUuid)
//Get all teams
router.get('/',controllTeam.getAllTeams)

module.exports = router