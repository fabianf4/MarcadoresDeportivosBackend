const express = require ('express')
const app = express()

//dotenv
require ('dotenv').config()
const port = process.env.PORT

//cors
const cors = require('cors')
app.use(cors())

//other
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//routers
const routerUser = require('./routers/routerUser')
const routerTeam = require('./routers/routerTeam')

app.use('/user',routerUser)
app.use('/team',routerTeam)

app.listen(port,()=>{
    console.log(`Api initialized on port ${port}`)
})