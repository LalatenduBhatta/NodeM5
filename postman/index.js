const express = require("express")
const { dbConnect } = require("./db/dbConnect")
const { userModel } = require("./model/userModel")

const PORT = 2000
const hostName = "127.0.0.2"

const app = express()
//middleware
app.use(express.json())

//get API
app.get("/", (req, res) => {
    res.send("HI FROM THE SERVER")
})
app.get("/getdata", (req, res) => {
    res.json({ name: "Messi", age: 36, address: "ARGENTINA" })
})
//post API
app.post("/newuser", async (req, res) => {
    // console.log(req.body)
    let user = new userModel(req.body)
    let response = await user.save()
    res.send("data stored in db")
})

app.listen(PORT, hostName, () => {
    console.log(`server running at http://${hostName}:${PORT}`);
    dbConnect()
})



