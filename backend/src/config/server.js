const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')

server.use(bodyParser.urlencoded({limit: '5000000', extended: true}))
server.use(bodyParser.json({limit: '5000000'}))
server.use(allowCors)



server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server