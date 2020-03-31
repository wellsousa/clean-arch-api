class HttpResponse{
    constructor(statusCode, body){
        this.statusCode = statusCode
        this.body = body
    }
}

class HttpRequest{
    constructor(body = {}){
        this.body = body
    }
}

module.exports = {HttpResponse, HttpRequest}