require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mongoose = require("./database/dbConnect")
const index = require("./routes/index")
const userRoutes = require("./routes/userRoutes")

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect()

app.use(index)
app.use(userRoutes)

module.exports = app