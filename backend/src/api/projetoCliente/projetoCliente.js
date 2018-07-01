const restful = require('node-restful')
const mongoose = restful.mongoose


const projetoClienteSchema = new mongoose.Schema({
    idProjeto: { type: String, required: true },
    idCliente: { type: String, required: true },
    responsavel:{type: Number, require:false, default: 1}
   
    
   
})

module.exports = restful.model('ProjetoCliente', projetoClienteSchema)