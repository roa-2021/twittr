const express = require('express')
const path = require('path')

const authRoutes = require('./routes/auth')

const server = express()

const usersRoute = require('./routes/users')
const tweetsRoute = require('./routes/tweets')
const followerRoute = require('./routes/followers')
const followingRoute = require('./routes/following')

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/users',usersRoute)
server.use('/api/v1/tweets',tweetsRoute)
server.use('/api/v1/followers',followerRoute)
server.use('/api/v1/following',followingRoute)
server.use('/api/v1', authRoutes)

module.exports = server
