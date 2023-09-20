const express = require('express')
const cors = require("cors")
const FRONTEND_URL = "http://localhost:3000/"
console.log(FRONTEND_URL);
require("dotenv").config()
const PORT = process.env.PORT || 4000
const app = express()
// middle to parse req body 

app.use(express.json())
app.use(
    cors({
        origin: FRONTEND_URL,
        credentials: true
    })
)
// import route of todo url
const todoroutes = require('./routes/todo')

// mount the todo api route
app.use('/api/v1', todoroutes)

// start server
app.listen(PORT, () => {
    console.log(`server started on port no. ${PORT}`);
})

// connected to db 
const dbconnect = require("./config/database")
dbconnect()

// defaulr route
app.get("/", (req, res) => {
    res.send(
        '<h1>this is homw page</h1>'
    )
})