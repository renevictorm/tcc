const Fase = require('./fase')

Fase.methods(['get', 'post', 'put', 'delete'])
Fase.updateOptions({new: true, runValidators: true})

module.exports = Fase