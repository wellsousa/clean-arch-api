const {HttpRequest, HttpResponse} = require('../protocols/Http')
const sut  = require('./SignUpController')
const {MissingParamError} = require('../errors/MissingParamError') 

describe('SignUp Controller', () => {
    test('Deve retornar 400 se nenhum nome for fornecido', () => {
        //sut = suite under test
        const httpRequest = new HttpRequest({
                                        email: 'any_email@mail.com',
                                        password: 'any_password',
                                        passwordConfirmation: 'any_password'
                                })

        const httpResponse = sut.handle( httpRequest )
        
        expect(httpResponse.statusCode).toBe(400)
        expect(httpResponse.body).toEqual(new MissingParamError('name'))
    })

    test('Deve retornar 400 se nenhum email for fornecido', () => {
        //sut = suite under test
        const httpRequest = new HttpRequest({
                                        name: 'any_name',
                                        password: 'any_password',
                                        passwordConfirmation: 'any_password'   
                                })

        const httpResponse = sut.handle( httpRequest )
        
        expect(httpResponse.statusCode).toBe(400)
        expect(httpResponse.body).toEqual(new MissingParamError('email'))
    })
})