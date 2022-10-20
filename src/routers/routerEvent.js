const { Router } = require("express")
const controllEvent = require("../controller/controllEvent")
const validateToken = require("../validator/validatorToken")
const router = new Router()

//Create event
router.post("/", validateToken, controllEvent.createEvent)
//Update event by uuid
router.put("/", validateToken, controllEvent.updateEvent)
//Delete event by uuid
router.delete("/", validateToken, controllEvent.deleteEventById)
//Get all events
router.get("/", validateToken, controllEvent.getAllEvent)

module.exports = router
