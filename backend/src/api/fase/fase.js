const restful = require('node-restful')
const mongoose = restful.mongoose


const faseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    idProjeto:{ type: String, required: true },
    inicio: { type: Date, required: true },
    fim: { type: Date, required: true },
  
    fimEsperado: { type: Date, required: true },
    descricao: { type: String, required: true },

   
})

module.exports = restful.model('Fase', faseSchema)