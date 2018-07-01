import { combineReducers } from 'redux'
import todoReducer from '../todo/todoReducer'
import colaboradorReducer from '../colaborador/colaboradorReducer'
import competenciaReducer from '../competencia/competenciaReducer';
import ccReducer from '../colaborador/ccReducer';
import clienteReducer from '../cliente/clienteReducer';
import projetoReducer from '../projeto/projetoReducer';
import projetoClienteReducer from '../projeto/projetoClienteReducer';
const rootReducer = combineReducers({
    todo: todoReducer,
    colaborador: colaboradorReducer,
    competencia: competenciaReducer,
    cc:ccReducer,
    pc:projetoClienteReducer,
    projeto: projetoReducer,
    cliente:clienteReducer
})
export default rootReducer
