import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TopBar from './TopBar.js';
import SideBar from './SideBar.js';
import Principal from './principal/Principal.js';
import BemVindo from './principal/BemVindo.js';
import Home from './principal/Home.js'
import AdicionarColaborador from './principal/AdicionarColaborador.js'
import NovoFuncionario from './principal/NovoFuncionario.js'
import store from '../store/index.js';
import Routes from './routes'
import NotFound from './NotFound'

class TelaInicial extends Component {
    componentDidMount() {
        const component = ReactDOM.findDOMNode(this);

        setTimeout(() => {
            component.style.opacity = 1;
        });
    }

    render() {
        return (
            <div id="Container">
                <TopBar />
                <SideBar />
                <div id="Content">
                <Routes /> 
                </div>
            </div>);
    }
}

export default TelaInicial;