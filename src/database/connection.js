const db = require('mongoose');
require('dotenv').config()

db.connect(process.env.DB_STRING, {
    useNewUrlParser: true
}).then((data) => {
    console.log('Conexao efetuada com o banco', data.connection.readyState)
})
    .catch((err) => console.log('Erro ao conectar no banco', err))

module.exports = db;