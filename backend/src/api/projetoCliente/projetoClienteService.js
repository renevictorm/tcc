const ProjetoCliente = require('./projetoCliente')

ProjetoCliente.methods(['get', 'post', 'put', 'delete'])
ProjetoCliente.updateOptions({new: true, runValidators: true})

module.exports = ProjetoCliente