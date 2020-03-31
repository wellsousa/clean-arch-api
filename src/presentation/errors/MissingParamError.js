
class MissingParamError extends Error{
    constructor(paramName){
        super(`Missing param: ${paramName}`)
        this.name = 'MissingParamError'
    }
}

MissingParam = {
    error: function(paramName){
        this.name = 'MissingParamError'
        return new Error(`Missing param: ${paramName}` )
    }
}

module.exports = {MissingParam, MissingParamError}
