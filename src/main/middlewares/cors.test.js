const request = require('supertest')
const app = require('../config/app')

describe('CORS Middleware', () => {
    test('deve habilitar o CORS', async () => {
        app.get('/test/cors', (req, res) => {
            res.send(req.body)
        })

        await request(app)
            .post('/test/cors')
            .send({ name: 'wellington'})
            .expect('acess-control-allow-origin', '*')
            .expect('acess-control-allow-methods', '*')
            .expect('acess-control-allow-headers', '*')
    })
})