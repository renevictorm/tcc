const restful = require('node-restful')
const mongoose = restful.mongoose


const colaboradorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    emailAlternative: { type: String, required: false },
    login: { type: String, required: true },
    camisa: { type: String, required: true },
    cpf: { type: String, required: true },
    identidade: { type: String, required: true },
    status: { type: Boolean, required: true, default: false },
    matricula: { type: Number, required: true },
    idade: { type: Number, required: true },
    dataNascimento: { type: Date, required: true },
    dataEntrada: { type: Date, required: true },
    dataSaida: { type: Date, required: true }
})

module.exports = restful.model('Colaborador', colaboradorSchema)