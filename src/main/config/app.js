const express = require('express')
const setupMiddleaware = require('./middlewares')
const setupRoutes = require('./routes')

const app = express()
setupMiddleaware(app)
setupRoutes(app)

module.exports = app