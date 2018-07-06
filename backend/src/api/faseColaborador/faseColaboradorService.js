const FaseColaborador = require('./faseColaborador')

FaseColaborador.methods(['get', 'post', 'put', 'delete'])
FaseColaborador.updateOptions({new: true, runValidators: true})

module.exports = FaseColaborador