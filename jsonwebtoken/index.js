// const jwt = require("jsonwebtoken")
// const securityKey = "Vicky"

// const user = { name: "Rohit", address: "Mumbai" }
// //generate token
// const token = jwt.sign(user, securityKey, { expiresIn: "30minutes" })
// console.log(token);

// //verify token
// const jwt_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUm9oaXQiLCJhZGRyZXNzIjoiTXVtYmFpIiwiaWF0IjoxNzExMzUwMzU2LCJleHAiOjE3MTEzNTIxNTZ9.9etcDgK_N3_Cyh5SI_-jNOx8X_9yXKBFQksfiD9naP0"

// let data = jwt.verify(jwt_token, securityKey, (err, data) => {
//     if (err) {
//         console.log("token expired");
//     }
//     else {
//         return data
//     }
// })
// console.log(data);

// const bcrypt = require("bcrypt")
// const saltRound = 10

// bcrypt.hash("THIS IS A PASSWORD", saltRound, (err, hasedData) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(hasedData);
//     }
// })

// const hasedPass = "$2b$10$O6XIFiGrvheTfbrcCN95qO8RNIHBk7BY6vdIdMASVqMHDaweQm8Iq"

// bcrypt.compare("THIS IS A PASSWORD", hasedPass, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         if (result) console.log("password matched");
//         else console.log("passwords are not matching")
//     }
// })

const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { dbConnect } = require("./db/dbConnect")
const { userModel } = require("./model/userModel")
const PORT = 8000
const hostName = "127.0.0.8"

const app = express()
//middlewares--------------
//json
app.use(express.json())

//API----------------------
//get
app.get("/getdata", (req, res) => {
    res.send("this is a get api")
})
//post registration
app.post("/post", async (req, res) => {
    let user = req.body
    const { password, username } = user
    if (username) {
        let isTaken = await userModel.findOne({ username })
        if (isTaken) {
            return res.status(400).send({ message: "username already taken" })
        }
    }
    const hasedPassword = await bcrypt.hash(password, 10)
    const newuserData = new userModel({ ...user, password: hasedPassword })
    await newuserData.save()
    res.status(201).send({ message: "data stored in db" })
})

//post login
app.post("/login", async (req, res) => {
    let data = req.body
    const { username, password } = data
    try {
        let isUser = await userModel.findOne({ username })
        if (!isUser) {
            return res.status(404).send({ message: "username not found" })
        } else {
            let isMatched = await bcrypt.compare(password, isUser.password)
            // console.log(isMatched);
            if (!isMatched) {
                return res.status(400).send({ message: "password is not matching" })
            }
            else {
                let token = jwt.sign(isUser._id.toString(), "secretKey", { expiresIn: "7d" })
                return res.status(200).send({ token })
            }
        }
    } catch (error) {
        return res.status(500).send({ message: "something went wrong" })
    }
})


app.listen(PORT, hostName, () => {
    console.log(`server started at http://${hostName}:${PORT}`);
    dbConnect()
})