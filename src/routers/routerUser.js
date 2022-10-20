const { Router } = require("express")
const controllUser = require("../controller/controllUser")
const validateToken = require("../validator/validatorToken")

const router = new Router()

//Create user
router.post("/", controllUser.createUser)
//Login with email and password
router.post("/login", controllUser.login)
//Update user by uid
router.put("/", validateToken, controllUser.updateUser)
//Delete user by uid
router.delete("/", validateToken, controllUser.deleteUserByUuid)
//Get all users
router.get("/", validateToken, controllUser.getAllUsers)

module.exports = router
