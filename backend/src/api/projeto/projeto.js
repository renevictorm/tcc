const restful = require('node-restful')
const mongoose = restful.mongoose


const projetoSchema = new mongoose.Schema({
    name: { type: String, required: true },
    codigo: { type: String, required: true },
    inicio: { type: Date, required: true },
    situacao: {type: String, required: false},
    inicio: { type: Date, required: true },
    fim: { type: Date, required: true },
    inicioEsperado: { type: Date, required: true },
    fimEsperado: { type: Date, required: true },
    tipo: { type: String, required: true },
    precoReal: { type: String, required: true },
    precoEsperado: { type: String, required: true },
    descricao: { type: String, required: true },
    gastos: {type: String, required:false},
    primeiroContato:{type: Date, required:false}
    
   
})

module.exports = restful.model('Projeto', projetoSchema)