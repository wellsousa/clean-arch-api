
const express = require('express')
const fg = require('fast-glob')

module.exports = function(app){
    const router = express.Router()
    app.use('/api', router)
    fg.sync('**/src/main/routes/**routes.js').map(async file => {
        try{
            console.log(`../../../${file}`)
            const route = (await import(`../../../${file}`)).default
            console.log(route)
            route(router)
        }catch(err){
            console.log('Houve um erro, tente novamente.')
        }

    })
}
