const restful = require('node-restful')
const mongoose = restful.mongoose


const chSchema = new mongoose.Schema({
    
    presenca: { type: Boolean, required: true, default: false },
    data: { type: Date, required: true },
    
})

module.exports = restful.model('CH', chSchema)