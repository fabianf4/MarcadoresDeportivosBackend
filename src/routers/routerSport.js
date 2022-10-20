const { Router } = require("express")
const controllSport = require("../controller/controllSport")
const router = new Router()
const validateToken = require("../validator/validatorToken")

//Create sport
router.post("/", validateToken, controllSport.createSport)
//Update sport by id
router.put("/", validateToken, controllSport.updateSport)
//Delete sport by id
router.delete("/", validateToken, controllSport.deleteSportById)
//Get all sports
router.get("/", validateToken, controllSport.getAllSport)

module.exports = router
