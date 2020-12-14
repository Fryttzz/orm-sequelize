const bodyParser = require('body-parser')
const pessoas = require('./pessoasPessoas')
module.exports = app => {
    app.use(bodyParser.json())
    app.use(pessoas)
}