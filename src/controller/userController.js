const UserModel = require("../models/userModel")
const createUser = async (req, res) => {
   try {
      const { name, email, password} = req.body

      const newUser = new UserModel({
        name, email, password
      })

      const savedUser = await newUser.save()

      res.status(201).json(savedUser)
   } catch (error) {
     console.error(error)
     res.status(500).json({ message: error.message })
   }
}

module.exports =  {
    createUser
  }