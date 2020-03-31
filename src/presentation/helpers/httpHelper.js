const {HttpResponse} = require('../protocols/Http')

const badRequest = (error) => {
    return new HttpResponse(400, error)
}

module.exports= {badRequest}