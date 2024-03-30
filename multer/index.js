const express = require("express")
const multer = require("multer")

const app = express()

//middlewares
app.use(express.json())

//multer config
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './image')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage })

//post
app.post("/json", (req, res) => {
    console.log(req.body);
    res.status(200).send({ msg: "data recieved" })
})

// app.post("/form", upload.none(), (req, res) => {
//     console.log(req.body);
//     res.send("data recieved")
// })
app.post("/form", upload.single("photo"), (req, res) => {
    console.log(req.body);
    res.send("data recieved")
})

app.listen(5000, () => {
    console.log("server started at 5000 port");
})