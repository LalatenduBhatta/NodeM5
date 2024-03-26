const mongoose = require("mongoose")

const url = "mongodb://127.0.0.1:27017/jsonwebtoken"

const dbConnect = async () => {
    try {
        await mongoose.connect(url)
        console.log("database connected");
    } catch (err) {
        console.log("something went wrong in db");
    }
}

module.exports = { dbConnect }