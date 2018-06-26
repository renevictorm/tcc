const restful = require('node-restful')
const mongoose = restful.mongoose


const clienteSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: false },
    telefone:{ type: String, required: false },
    contatoPreferencial: { type: String, required: false },
    identidade: { type: String, required: false },
    cnpj: { type: String, required: false },
    cpf: { type: String, required: false },
  
    endereco: { type: String, required: false },
    capitacaoAtiva: { type: Boolean, required: true, default: false },
    empresa: { type: String, required: false }
})

module.exports = restful.model('Cliente', clienteSchema)