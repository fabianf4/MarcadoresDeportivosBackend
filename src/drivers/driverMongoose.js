const mongoose = require ('mongoose')

const URI = process.env.URI
const DB = process.env.DB

mongoose.connect(URI+DB)
    .then(()=>console.log('Success connected to DB'))
    .catch((err)=> console.log('Error connecting to db' + err))

module.exports = mongoose
