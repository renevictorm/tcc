import React from 'react';
import ReactDOM from 'react-dom';
import App from './view/App';

import registerServiceWorker from './registerServiceWorker.js';

import 'materialize-css/bin/materialize.css';
import 'materialize-css/bin/materialize.js';

import 'material-design-icons/iconfont/material-icons.css';
import 'typeface-josefin-sans';


import './css/materialize.css';
import './css/main.css';

window.$.fn.velocity = window.$.Velocity = window.Velocity;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
