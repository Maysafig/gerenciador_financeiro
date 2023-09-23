const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },

    name: {
        type: String, 
        required: true, 
        unique: true, 
    },

    email: {
        type: String,
        required: true,
        unique: true,
        immutable: true,
        lowercase: true
    },

    password: { 
        type: String,
        required: true
    }
     
},  { timestamps: true })

const User = mongoose.model("user", userSchema)

module.exports = User