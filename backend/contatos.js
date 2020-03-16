const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contatosSchema = new Schema(
    {
        nome: String,
        email: String,
        cidade: String,
        estado: String,
        assunto: String,
        mensagem: String
    }
)

module.exports = mongoose.model("contatos", contatosSchema);