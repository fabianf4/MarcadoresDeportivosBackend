const { Router } = require("express")
const controllUser = require("../controller/controllUser")
const validateToken = require("../validator/validatorToken")

const router = new Router()

const multer = require("multer")
const upload = multer({ dest: "./src/public/" })

//Create user
router.post("/", upload.single("avatar"), controllUser.createUser)
//Login with email and password
router.post("/login", upload.none(), controllUser.login)
//Update user by uid
router.put("/", upload.none(), validateToken, controllUser.updateUser)
//Delete user by uid
router.delete("/", upload.none(), validateToken, controllUser.deleteUserByUuid)
//Get all users
router.get("/", upload.none(), validateToken, controllUser.getAllUsers)

module.exports = router
