

SignUpController = {
    handle: function(httpRequest){
        return {
            statusCode: 400,
            body: new Error('Missing param: name')
        }
    }
}

module.exports = SignUpController