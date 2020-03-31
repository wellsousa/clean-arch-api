const {HttpRequest, HttpResponse} = require('../protocols/Http')
const {MissingParamError} = require('../errors/MissingParamError')
const {badRequest} = require('../helpers/httpHelper')

SignUpController = {
    handle: function( httpRequest ){
        console.log(httpRequest)

        if(! httpRequest.body.name){
                return badRequest(new MissingParamError('name'))
        }

        if(! httpRequest.body.email){
            return badRequest(new MissingParamError('email'))
        }

        if(! httpRequest.body.password){
            return badRequest(new MissingParamError('password'))
        }

        return {statusCode: 200}
    }
}


module.exports = SignUpController