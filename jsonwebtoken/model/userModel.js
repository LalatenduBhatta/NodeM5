const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: String,
    age: Number,
    username: {
        type: String,
        unique: true,
        required: true
    },
    mobile: String,
    email: String,
    address: String,
    password: String
})

const userModel = mongoose.model("users", userSchema)
module.exports = { userModel }