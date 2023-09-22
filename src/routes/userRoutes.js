const controller = require("../controller/userController")
const express = require("express")

const router = express.Router()

router.post("/users/create", controller.createUser)

module.exports = router