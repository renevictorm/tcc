const TelefoneColaborador = require('./telefoneColaborador')

TelefoneColaborador.methods(['get', 'post', 'put', 'delete'])
TelefoneColaborador.updateOptions({new: true, runValidators: true})

module.exports = TelefoneColaborador