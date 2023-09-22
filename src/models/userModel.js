const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
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
     
},  { timestamps: true }, { versionKey: false })

const User = mongoose.model("user", userSchema)

module.exports = User