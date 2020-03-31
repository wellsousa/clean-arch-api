const request = require('supertest')
const app = require('../config/app')

describe('SignUp Routes', () => {
    test('Deve retornar uma conta com sucesso', async () => {

        await request(app)
            .post('/api/signup')
            .send({ 
                    name: 'wellington',
                    email: 'wellington@email.com',
                    password: '123',
                    passwordConfirmation: '123'
                })
            .expect(404)
    })
})