const bodyParser = require("body-parser");
const express = require('express')
const port = 3000

const server = express()
const urlencodedParser = bodyParser.urlencoded({extended: false});

server.get("/", function(req, res) {
  res.send("<h1>Main page</h1>")
})

server.get("/bro", urlencodedParser, function(req, res) {
  res.sendFile(__dirname + "/BROpage.html")
})

server.post("/bro", urlencodedParser, function(req, res) {
    if(!req.body) return res.sendStatus(400)
    console.log(req.body.Data)
    res.send(`${req.body.Data}`)
});

server.listen(port, function() {
  console.log("Server started at 3000")
})
