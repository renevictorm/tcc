
import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../template/custom.css'

import React, { Component } from 'react'
import Menu from '../template/menu'
import Routes from './routes'

import store from '../store/index.js';
import Login from './Login.js';
import TelaInicial from './TelaInicial.js';

class App extends Component {
    componentWillMount() {
      this.unsubscribe = store.subscribe(() =>
        this.forceUpdate()
      );
    }
  
    render() {
      if (store.getState().usuarioAtual != null)
        return ( 
          <div className="App">
            <TelaInicial />
          </div>);
      else {
        return (
         
          <div className="App">
            <Login />
          </div>);
      }
    }
  }
  
  export default App;

/*
export default props => (
    <div className='container'>
        <Menu />
        <Routes />
    </div>
)
*/