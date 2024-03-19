const express = require("express")
const path = require("path")

const app = express()
//static middleware
app.use(express.static(path.join(__dirname, "view")))
//json middlware
app.use(express.json())

app.get("/", (req, res) => {
    console.log(req.url, req.method);
    // res.send("<h1>THIS IS HANDELED BY NODEMON</h1>")
    res.sendFile(path.join(__dirname, "view", "index.html"))
})
// app.get("/blog", (req, res) => {
//     console.log(req.url, req.method)
//     // res.send("<h1>WELCOME TO BLOG PAGE</h1>")
//     res.sendFile(path.join(__dirname, "view", "pages", "blog.html"))
// })
// app.get("/index.css", (req, res) => {
//     console.log(req.url, req.method)
//     res.sendFile(path.join(__dirname, "view", "index.css"))
// })
app.post("/newstudent", (req, res) => {
    console.log(req.url, req.method);
    console.log(req.body)
    res.send({ msg: "data recieved" })
})

app.listen(7000, "127.0.0.7", () => {
    console.log("Server started at http://127.0.0.7:7000");
})