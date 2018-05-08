const CH = require('./ch')

CH.methods(['get', 'post', 'put', 'delete'])
CH.updateOptions({new: true, runValidators: true})

module.exports = CH