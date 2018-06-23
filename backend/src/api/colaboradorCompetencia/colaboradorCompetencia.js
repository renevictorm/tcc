const restful = require('node-restful')
const mongoose = restful.mongoose


const colaboradorCompetenciaSchema = new mongoose.Schema({
    idColaborador: { type: String, required: true },
    idCompetencia: { type: String, required: true },
    nivel:{type: Number, require:false}
  
})

module.exports = restful.model('ColaboradorCompetencia', colaboradorCompetenciaSchema)