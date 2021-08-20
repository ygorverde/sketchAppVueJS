const app = require('express')()
const consign = require('consign')
const db = require('./config/db')
const mongoose = require('mongoose')

require('./config/mongodb')

app.db = db // PostgreSQL
app.mongoose = mongoose // MongoDB

consign() // Injeta em cada uma das dependências o parâmetro App.
        .include('./config/passport.js')
        .then('./config/middlewares.js')
        .then('./api/validation.js')
        .then('./api')
        .then('./schedule')
        .then('./config/routes.js')
        .into(app)

app.listen(3000, () => {
    console.log('Backend executando..')
})