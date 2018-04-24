const restful = require('node-restful')
const mongoose = restful.mongoose


const horarioSchema = new mongoose.Schema({
    dia: { type: String, required: true },
    hora: { type: Number, required: true },
   
   
})

module.exports = restful.model('Horario', horarioSchema)