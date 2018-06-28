const express = require('express')

module.exports = function (server) {

    // API Routes
    const router = express.Router()
    server.use('/api', router)

    // TODO Routes
    const todoService = require('../api/todo/todoService')
    todoService.register(router, '/todos')

    // COLABORADOR Routes
    const colaboradorService = require('../api/colaborador/colaboradorService')
    colaboradorService.register(router, '/colaboradores')

     // PROJETO Routes
     const projetoService = require('../api/projeto/projetoService')
     projetoService.register(router, '/projetos')

    // CLIENTE Routes
    const clienteService = require('../api/cliente/clienteService')
    clienteService.register(router, '/clientes')

    // COMPETENCIA Routes
    const competenciaService = require('../api/competencia/competenciaService')
    competenciaService.register(router, '/competencias')

    // FASE Routes
    const faseService = require('../api/fase/faseService')
    faseService.register(router, '/fases')

    // HORARIO Routes
    const horarioService = require('../api/horario/horarioService')
    horarioService.register(router, '/horarios')

    // MENSAGEM Routes
    const mensagemService = require('../api/mensagem/mensagemService')
    mensagemService.register(router, '/mensagem')

    // NOTIFICACAO Routes
    const notificacaoService = require('../api/notificacao/notificacaoService')
    notificacaoService.register(router, '/notificacao')

    // POSTAGEM Routes
    const postagemService = require('../api/postagem/postagemService')
    postagemService.register(router, '/postagem')

    // ARQUIVO Routes
    const arquivoService = require('../api/arquivo/arquivoService')
    arquivoService.register(router, '/arquivo')

    // TELEFONE Routes
    const telefoneService = require('../api/telefone/telefoneService')
    telefoneService.register(router, '/telefone')

    // COLABORADOR_COMPETENCIA Routes
    const colaboradorCompetenciaService = require('../api/colaboradorCompetencia/colaboradorCompetenciaService')
    colaboradorCompetenciaService.register(router, '/colaboradorCompetencia')

    // CH Routes
    const chService = require('../api/colaboradorHorario/chService')
    chService.register(router, '/ch')
}