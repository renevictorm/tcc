import { combineReducers } from 'redux'
import todoReducer from '../todo/todoReducer'
import colaboradorReducer from '../colaborador/colaboradorReducer'
const rootReducer = combineReducers({
    todo: todoReducer,
    colaborador: colaboradorReducer
})
export default rootReducer
