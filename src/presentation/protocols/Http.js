class HttpResponse{
    constructor(statusCode, body){
        this._statusCode = statusCode
        this._body = body
    }

    get statusCode(){
        return this._statusCode
    }

    get body(){
        return this._body
    }
}

class HttpRequest{
    constructor(body = {}){
        this.body = body
    }
}

module.exports = {HttpResponse, HttpRequest}