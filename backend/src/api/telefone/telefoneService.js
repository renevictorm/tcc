const Telefone = require('./telefone')

Telefone.methods(['get', 'post', 'put', 'delete'])
Telefone.updateOptions({new: true, runValidators: true})

module.exports = Telefone