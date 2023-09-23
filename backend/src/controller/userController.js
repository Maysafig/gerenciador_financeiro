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

const findAllUsers = async (req, res) => {
  try {
    const allUsers = await UserModel.find()
    res.status(200).json(allUsers)
  } catch(error) {
    console.error(error)
    res.status(500).json({ message: error.message})
  }
}

 const findUserById = async (req, res) => {
  try {
    const findUser = await UserModel.findById(req.params.id)
    res.status(200).json(findUser)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
}

const updateUser = async (req, res) => {
  try {
    const { name, email } = req.body
    const updatedUser = await UserModel
    .findByIdAndUpdate(req.params.id, {
      name, email
    })
    res.status(200).json(updatedUser)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
}

const deleteUser = async (req, res) => {
   try {
       const { id } = req.params
       await UserModel.findByIdAndDelete(id)
       const message = "O usuário com o ${id} foi deletado com sucesso!"
      res.status(200).json({ message })
   } catch (error) {
     console.error(error)
     res.status(500).json({ message: error.message })
   }
}

module.exports =  {
  createUser, findAllUsers, findUserById, updateUser, deleteUser
}