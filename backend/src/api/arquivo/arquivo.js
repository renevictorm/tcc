const restful = require('node-restful')
const mongoose = restful.mongoose


const arquivoSchema = new mongoose.Schema({
    name: { type: String, required: true },
    path: { type: String, required: true },
})

module.exports = restful.model('Arquivo', arquivoSchema)