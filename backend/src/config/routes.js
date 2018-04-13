const express = require('express')

module.exports = function(server) {
    
    // API Routes
    const router = express.Router()
    server.use('/api', router)
    
    // TODO Routes
    const todoService = require('../api/todo/todoService')
    todoService.register(router, '/todos')

    // COLABORADOR Routes
    const colaboradorService = require('../api/colaborador/colaboradorService')
    colaboradorService.register(router, '/colaboradores')

    // CLIENTE Routes
    const clienteService = require('../api/cliente/clienteService')
    clienteService.register(router, '/clientes')
}