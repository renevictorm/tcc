const Colaborador = require('./colaborador')

Colaborador.methods(['get', 'post', 'put', 'delete'])
Colaborador.updateOptions({new: true, runValidators: true})

module.exports = Colaborador