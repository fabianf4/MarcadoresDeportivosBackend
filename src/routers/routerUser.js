const {Router} = require ('express');
const controllUser = require ('../controller/controllUser')

const router = new Router()

//Create user
router.post('/', controllUser.createUser)
//Search user by uid
router.get('/:uuid', controllUser.getUserByUuid)
//Update user by uid
router.put('/:uuid', controllUser.updateUser)
//Delete user by uid
router.delete('/:uuid', controllUser.deleteUserByUuid)
//Get all users
router.get('/', controllUser.getAllUsers)

module.exports = router