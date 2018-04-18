const restful = require('node-restful')
const mongoose = restful.mongoose


const faseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    observacao: { type: String, required: true },
   
})

module.exports = restful.model('Fase', faseSchema)