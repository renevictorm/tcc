import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './main/app'

import reducers from './main/reducers'

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'



import 'materialize-css/bin/materialize.js';
import 'materialize-css/bin/materialize.css';
import 'material-design-icons/iconfont/material-icons.css';
import 'typeface-josefin-sans';
import './css/materialize.css';
import './css/main.css';
window.$.fn.velocity = window.$.Velocity = window.Velocity;
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers, devTools)
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app'));
    registerServiceWorker();
    
