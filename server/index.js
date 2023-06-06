const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const cors = require('cors')
app.use(cors())

const PORT = 8080

const Routers = require('./Routes/Router')
app.use(bodyparser.json())
app.use('/resume', Routers)

mongoose.connect("mongodb://localhost:27017/eresume").then(() => {
    console.log("Database is connected and live...")
});

app.listen(PORT, () => {
    console.log(`Server is up and running on ${PORT}`)
})