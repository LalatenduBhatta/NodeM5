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
app.get("/getdata", async (req, res) => {
    let data = await userModel.find()
    res.status(200).send(data)
})
app.get("/getuser/:name", async (req, res) => {
    // console.log(req.params);
    const { name } = req.params
    let user = await userModel.findOne({ name: name })
    if (user) {
        res.status(200).send({ user })
    } else {
        res.status(404).send({ message: "user not found" })
    }
})
//post API
app.post("/newuser", async (req, res) => {
    // console.log(req.body)
    let user = new userModel(req.body)
    let response = await user.save()
    res.send("data stored in db")
})

//deleteAPI
app.delete("/deleteuser", async (req, res) => {
    // console.log(req.query);
    const { name } = req.query
    let response = await userModel.deleteOne({ name: name })
    // console.log(response);
    if (response.deletedCount > 0) {
        res.status(200).send({ message: "user deleted successfully" })
    } else {
        res.status(400).send({ message: "user not registered" })
    }
})
//updateAPI
app.put("/updateuser/:name", async (req, res) => {
    const { name } = req.params
    const updateData = req.body
    const response = await userModel.updateOne({ name: name }, {
        $set: {
            ...updateData
        }
    })
    res.send(response)
})

app.listen(PORT, hostName, () => {
    console.log(`server running at http://${hostName}:${PORT}`);
    dbConnect()
})



