const request = require('supertest')
const app = require('../config/app')

describe('Body Parser Middleware', () => {
    test('deve fazer o parse do body como json', async () => {
        app.post('/test/bodyparser', (req, res) => {
            res.send(req.body)
        })

        await request(app)
            .post('/test/bodyparser')
            .send({ name: 'wellington'})
            .expect({ name: 'wellington'})
    })
})