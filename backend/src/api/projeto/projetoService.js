const Projeto = require('./horario')

Projeto.methods(['get', 'post', 'put', 'delete'])
Projeto.updateOptions({new: true, runValidators: true})

module.exports = Projeto