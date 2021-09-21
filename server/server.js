const express = require('express')
const path = require('path')

const movieRoutes = require('./routes/movies')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/movies', movieRoutes)

module.exports = server
