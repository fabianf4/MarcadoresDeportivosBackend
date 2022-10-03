const express = require("express")
const app = express()

//dotenv
require("dotenv").config()
const port = process.env.PORT

//cors
const cors = require("cors")
app.use(cors())

//other
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//mongoose
require("./drivers/driverMongoose")

//routers
const routerUser = require("./routers/routerUser")
const routerTeam = require("./routers/routerTeam")
const routerEvent = require("./routers/routerEvent")
const routerSport = require("./routers/routerSport")

app.use("/user", routerUser)
app.use("/team", routerTeam)
app.use("/event", routerEvent)
app.use("/sport", routerSport)

app.listen(port, () => {
  console.log(`Api initialized on port ${port}`)
})
