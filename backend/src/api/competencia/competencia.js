const restful = require('node-restful')
const mongoose = restful.mongoose


const competenciaSchema = new mongoose.Schema({
    name: { type: String, required: true },
    observacao: { type: String, required: true },
   
})

module.exports = restful.model('Competencia', competenciaSchema)