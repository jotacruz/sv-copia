const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReceitasSchema = new Schema(
    {
        id: Number,
        image: String,
        bigImage: String,
        title: String,
        ingredientes: String,
        modo_preparo: String,
        badges: Array
    }
)

module.exports = mongoose.model("receitas", ReceitasSchema);