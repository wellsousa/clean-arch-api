const express = require('express')

const app = express()

app.listen(3333, () => {
    console.log('Server running at http://localhost:3333')
})