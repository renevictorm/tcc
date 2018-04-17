const Competencia = require('./competencia')

Competencia.methods(['get', 'post', 'put', 'delete'])
Competencias.updateOptions({new: true, runValidators: true})

module.exports = Competencia