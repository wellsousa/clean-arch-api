const sut  = require('./SignUpController')
const {MissingParamError} = require('../errors/missing-param-error') 

describe('SignUp Controller', () => {
    test('Deve retornar 400 se nenhum nome for fornecido', () => {
        //sut = suite under test
        const httpRequest = {
            body: {
                email: 'any_email@mail.com',
                password: 'any_password',
                passwordConfirmation: 'any_password'
            }
        }

        const httpResponse = sut.handle( httpRequest )
        
        expect(httpResponse.statusCode).toBe(400)
        expect(httpResponse.body).toEqual(new MissingParamError('name'))
    })
})