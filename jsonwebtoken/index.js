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


