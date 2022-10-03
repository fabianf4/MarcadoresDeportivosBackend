const {Router} = require ('express');
const controllEvent = require ('../controller/controllEvent')

const router = new Router()

//Create event
router.post('/',controllEvent.createEvent)
//Update event by uuid
router.put('/', controllEvent.updateEvent)
//Delete event by uuid
router.delete('/', controllEvent.deleteEventById)
//Get all events
router.get('/', controllEvent.getAllEvent)

module.exports = router