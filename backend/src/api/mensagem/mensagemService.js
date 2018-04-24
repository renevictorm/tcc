const Mensagem = require('./mensagem')

Mensagem.methods(['get', 'post', 'put', 'delete'])
Mensagem.updateOptions({new: true, runValidators: true})

module.exports = Mensagem