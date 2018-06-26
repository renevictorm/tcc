import { combineReducers } from 'redux'
import todoReducer from '../todo/todoReducer'
import colaboradorReducer from '../colaborador/colaboradorReducer'
import competenciaReducer from '../competencia/competenciaReducer';
import ccReducer from '../colaborador/ccReducer';
const rootReducer = combineReducers({
    todo: todoReducer,
    colaborador: colaboradorReducer,
    competencia: competenciaReducer,
    cc:ccReducer
})
export default rootReducer
