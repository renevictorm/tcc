const Horario = require('./horario')

Horario.methods(['get', 'post', 'put', 'delete'])
Horario.updateOptions({new: true, runValidators: true})

module.exports = Horario