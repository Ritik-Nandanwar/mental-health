require("dotenv").config()
const express = require("express")
var bodyParser = require('body-parser');

const app = express()
const mongoose = require("mongoose")
const path = require('path')
const router = require('./routes/routes')
const PORT = process.env.PORT || 3000

//LOCAL DATABASE

// mongoose.connect("mongodb://localhost/usersForm", { useNewUrlParser: true, useUnifiedTopology: true })

//REMOTE DATABASE

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on("error", (error) => {
  console.log(error)
})
db.once("open", () => {
  console.log("Connected to database")
})

app.set("view engine", "ejs")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/static', express.static('static'))
app.use(express.json())

app.use("/", router)
app.listen(PORT, () => {
  console.log(`Server up and running on ${PORT}`)
})