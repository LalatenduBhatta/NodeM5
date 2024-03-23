const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: { type: String },
    age: { type: String },
    address: { type: String },
    mobile: { type: Number }
})

const userModel = mongoose.model("users", userSchema)

module.exports = { userModel }