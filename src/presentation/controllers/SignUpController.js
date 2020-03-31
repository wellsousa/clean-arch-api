const {HttpRequest, HttpResponse} = require('../protocols/Http')
const {MissingParamError} = require('../errors/MissingParamError')

SignUpController = {
    handle: function( httpRequest ){
       
        if(! httpRequest.body.name){
            return {
                statusCode: 400,
                body: new MissingParamError('name')
            }
        }

        if(! httpRequest.body.email){
            return{
                statusCode: 400,
                body: new MissingParamError('email')
            }
        }

        return{
            statusCode: 400
        }
    }
}

module.exports = SignUpController