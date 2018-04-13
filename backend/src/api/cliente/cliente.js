const restful = require('node-restful')
const mongoose = restful.mongoose


const clienteSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    contatoPreferencial: { type: String, required: true },
    cidade: { type: String, required: true },
    cpfCnpj: { type: String, required: true },
    estado: { type: String, required: true },
    pais: { type: String, required: true },
    endereco: { type: String, required: true },
    capitacaoAtiva: { type: Boolean, required: true, default: false },
    empresa: { type: String, required: true }
})

module.exports = restful.model('Cliente', clienteSchema)