const restful = require('node-restful')
const mongoose = restful.mongoose


const telefoneSchema = new mongoose.Schema({
    numero: { type: String, required: true }
  
})

module.exports = restful.model('Telefone', telefoneSchema)