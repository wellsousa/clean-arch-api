//const express = require('express')
const cors = require('../middlewares/cors')
const bodyParser = require('../middlewares/bodyParser')

module.exports = function(app){
    app.use(bodyParser)
    app.use(cors)
}