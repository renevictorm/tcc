const restful = require('node-restful')
const mongoose = restful.mongoose


const telefoneColaboradorSchema = new mongoose.Schema({
    idColaborador: { type: String, required: true },
    idTelefone: { type: String, required: true }
  
})

module.exports = restful.model('TelefoneColaborador', telefoneColaboradorSchema)