const restful = require('node-restful')
const mongoose = restful.mongoose


const postagemSchema = new mongoose.Schema({
    texto: { type: String, required: true },
    data:{type: Date, required:true},
    idColaborador:{type: String, required:true},
    idFase:{type: String, required:true},
    nameColaborador:{type: String, required:true}
})

module.exports = restful.model('Postagem', postagemSchema)