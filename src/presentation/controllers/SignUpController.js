const {HttpRequest, HttpResponse} = require('../protocols/Http')
const {MissingParamError} = require('../errors/MissingParamError')
const {badRequest} = require('../helpers/httpHelper')

SignUpController = {
    handle: function( httpRequest ){

        const requiredFields = ['name', 'email']

        for(const field of requiredFields){
            if(! httpRequest.body[field]){
                return badRequest(new MissingParamError(field))
            }
        }

        return {statusCode: 200}
    }
}


module.exports = SignUpController