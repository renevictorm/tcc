const Postagem = require('./postagem')

Postagem.methods(['get', 'post', 'put', 'delete'])
Postagem.updateOptions({new: true, runValidators: true})

module.exports = Postagem