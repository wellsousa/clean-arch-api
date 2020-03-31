//const express = require('express')

const bodyParser = require('../middlewares/bodyParser')

module.exports = function(app){
    app.use(bodyParser)
}