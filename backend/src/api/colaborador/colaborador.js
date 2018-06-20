const restful = require('node-restful')
const mongoose = restful.mongoose


const colaboradorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    tipo: { type: Number, required: true },//1super admin - 2admin - 3user
    email: { type: String, required: true },
    emailAlternative: { type: String, required: false },
    login: { type: String, required: true },
    senha: { type: String, required: true },
    camisa: { type: String, required: true },
    endereco: { type: String, required: true },
    cpf: { type: String, required: true },
    identidade: { type: String, required: true },
    cargo: { type: String, required: true },
    status: { type: Boolean, required: true, default: true },
    matricula: { type: String, required: true },
    dataNascimento: { type: Date, required: true },
    dataEntrada: { type: Date, required: true },
    dataSaida: { type: Date, required: false }
})

module.exports = restful.model('Colaborador', colaboradorSchema)