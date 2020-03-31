const express = require('express')
const setupMiddleaware = require('./middlewares')

const app = express()
setupMiddleaware(app)

module.exports = app