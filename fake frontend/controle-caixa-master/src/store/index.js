import { createStore, combineReducers } from "redux";
import usuarioAtual from './usuarioAtual.js';
import navigation from './navigation.js';
import lojaAtual from './lojaAtual.js';

const reducers = combineReducers({usuarioAtual, navigation, lojaAtual});

const store = createStore(reducers);

export default store;