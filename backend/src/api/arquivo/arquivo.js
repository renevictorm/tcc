const restful = require('node-restful')
const mongoose = restful.mongoose
var Schema = mongoose.Schema;

const arquivoSchema = new Schema({
    file: { type: Schema.Types.Object , required: true },
    
   
})

module.exports = restful.model('Arquivo', arquivoSchema)