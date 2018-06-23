import { combineReducers } from 'redux'
import todoReducer from '../todo/todoReducer'
import colaboradorReducer from '../colaborador/colaboradorReducer'
import competenciaReducer from '../competencia/competenciaReducer';
const rootReducer = combineReducers({
    todo: todoReducer,
    colaborador: colaboradorReducer,
    competencia: competenciaReducer
})
export default rootReducer
