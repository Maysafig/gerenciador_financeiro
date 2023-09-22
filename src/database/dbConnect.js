const DATABASE_URI = "mongodb+srv://maysafigueiredo:czAAqDEjQhZ3QsSe@cluster0.odkwwb4.mongodb.net/?retryWrites=true&w=majority"

const mongoose = require("mongoose")

const connect = async() => {
   try {
     await mongoose.connect(DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
     })

     console.log("banco conectado!")
   } catch (error) {
    console.error(error)
   }
}

module.exports = {
  connect
}