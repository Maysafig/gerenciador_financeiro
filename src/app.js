const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const mongoose = require("./database/dbConnect.js")
const userRoutes = require("./routes/userRoutes")

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect()

app.use(userRoutes)

module.exports = app