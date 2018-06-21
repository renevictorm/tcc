import React, { Component } from 'react';
import store from '../store/index.js';
import Login from './Login.js';
import TelaInicial from './TelaInicial.js';
import Routes from './routes'
import Menu from '../template/menu'

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
         
          <TelaInicial/>
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