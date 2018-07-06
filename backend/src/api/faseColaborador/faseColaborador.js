const restful = require('node-restful')
const mongoose = restful.mongoose


const faseColaboradorSchema = new mongoose.Schema({
    idFase: { type: String, required: true },
    idColaborador: { type: String, required: true }   
    
   
})

module.exports = restful.model('FaseColaborador', faseColaboradorSchema)