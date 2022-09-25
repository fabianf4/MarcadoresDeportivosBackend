const {Router, Router} = require ('express');

const router = new Router()

//Create scoreboard
router.post('/')
//Search scoreboard by uuid
router.get('/:uuid')
//Update scoreboard by uuid
router.update('/:uuid')
//Delete scoreboard by uuid
router.delete('/:uuid')
//Get all scoreboards
router.get('/')

module.exports = router