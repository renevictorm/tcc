const Notificacao = require('./notificacao')

Notificacao.methods(['get', 'post', 'put', 'delete'])
Notificacao.updateOptions({new: true, runValidators: true})

module.exports = Notificacao