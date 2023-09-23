const controller = require("../controller/userController")
const express = require("express")

const router = express.Router()

router.post("/user/create", controller.createUser)
router.get("/user", controller.findAllUsers)
router.get("/user/:id", controller.findUserById)
router.put("/user/:id", controller.updateUser)
router.delete("/user/:id", controller.deleteUser)

module.exports = router