const restful = require('node-restful')
const mongoose = restful.mongoose


const postSchema = new mongoose.Schema({
    texto: { type: String, required: true },
    data:{type: Date, required:true}
})

module.exports = restful.model('Post', postSchema)