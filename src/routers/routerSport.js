const {Router} = require ('express');
const controllSport = require ('../controller/controllSport')
const router = new Router()

//Create sport
router.post('/',controllSport.createSport)
//Update sport by id
router.put('/',controllSport.updateSport)
//Delete sport by id
router.delete('/', controllSport.deleteSportById)
//Get all sports
router.get('/',controllSport.getAllSport)

module.exports = router