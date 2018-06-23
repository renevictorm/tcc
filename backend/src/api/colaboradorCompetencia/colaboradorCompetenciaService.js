const ColaboradorCompetencia = require('./colaboradorCompetencia')

ColaboradorCompetencia.methods(['get', 'post', 'put', 'delete'])
ColaboradorCompetencia.updateOptions({new: true, runValidators: true})

module.exports = ColaboradorCompetencia