const restful = require('node-restful')
const mongoose = restful.mongoose


const colaboradorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    tipoUsuario: { type: Number, required: true },//1super admin - 2admin - 3user    
    matricula: { type: String, required: true },
    email: { type: String, required: true },
    emailAlternative: { type: String, required: false } ,
    cpf: { type: String, required: true },
    endereco: { type: String, required: true },
    identidade: { type: String, required: true },
    cargo: { type: String, required: true },
    login: { type: String, required: true },
    senha: { type: String, required: true },
    dataNascimento: { type: Date, required: true },
    dataEntrada: { type: Date, required: true },
    dataSaida: { type: Date, required: false },
    camisa: { type: String, required: true },
    status: { type: String, required: true, default: "true" }
    
    
})
module.exports = restful.model('Colaborador', colaboradorSchema)

/*
    
    
   
  
    
    
  

*/