import { combineReducers } from 'redux'
import todoReducer from '../todo/todoReducer'
import colaboradorReducer from '../colaborador/colaboradorReducer'
import competenciaReducer from '../competencia/competenciaReducer';
import ccReducer from '../colaborador/ccReducer';
import clienteReducer from '../cliente/clienteReducer';
import projetoReducer from '../projeto/projetoReducer';
import projetoClienteReducer from '../projeto/projetoClienteReducer';
import faseReducer from '../fase/faseReducer';
import faseColaboradorReducer from '../fase/faseColaboradorReducer';
import fasePostsReducer from '../fase/fasePostsReducer';
import arquivoReducer from '../arquivos/arquivoReducer';
const rootReducer = combineReducers({
    todo: todoReducer,
    colaborador: colaboradorReducer,
    competencia: competenciaReducer,
    cc:ccReducer,
    pc:projetoClienteReducer,
    projeto: projetoReducer,
    fase:faseReducer,
    cliente:clienteReducer,
    fc:faseColaboradorReducer,
    post:fasePostsReducer,
    arquivo:arquivoReducer
})
export default rootReducer
