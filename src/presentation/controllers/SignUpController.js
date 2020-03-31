const {HttpRequest, HttpResponse} = require('../protocols/Http')
const {MissingParamError} = require('../errors/MissingParamError')
const {badRequest} = require('../helpers/httpHelper')

SignUpController = {
    handle: function( httpRequest ){
        
        if(! httpRequest.body.name){
            return badRequest( new MissingParamError('name') )
                    
        }

        if(! httpRequest.body.email){
            return badRequest( new MissingParamError('email') )
        }

        return {
                    statusCode: 400
                }
    }
}

module.exports = SignUpController