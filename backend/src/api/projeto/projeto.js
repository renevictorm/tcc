const restful = require('node-restful')
const mongoose = restful.mongoose


const projetoSchema = new mongoose.Schema({
    name: { type: String, required: true },
    codigo: { type: String, required: true },
    inicio: { type: Date, required: true },
    situacao: {type: String, required: false},
    
    fim: { type: Date, required: false },
   
    fimEsperado: { type: Date, required: false },
    tipo: { type: String, required: false },
    precoReal: { type: Number, required: false },
    precoEsperado: { type: Number, required: false },
    descricao: { type: String, required: true },
    gastos: {type: Number, required:false},
   
    
   
})

module.exports = restful.model('Projeto', projetoSchema)