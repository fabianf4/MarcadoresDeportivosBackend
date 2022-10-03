const {Router} = require ('express');
const controllUser = require ('../controller/controllUser')

const router = new Router()

//Create user
router.post('/', controllUser.createUser)
//Search user by uid
router.get('/login', controllUser.getUserByUuid)
//Update user by uid
router.put('/', controllUser.updateUser)
//Delete user by uid
router.delete('/', controllUser.deleteUserByUuid)
//Get all users
router.get('/', controllUser.getAllUsers)

module.exports = router