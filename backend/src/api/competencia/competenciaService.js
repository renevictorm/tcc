const Competencia = require('./competencia')

Competencia.methods(['get', 'post', 'put', 'delete'])
Competencia.updateOptions({new: true, runValidators: true})

module.exports = Competencia