import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TopBar from './TopBar.js';
import SideBar from './SideBar.js';
import Principal from './principal/Principal.js';
import BemVindo from './principal/BemVindo.js'
import store from '../store/index.js';

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
                <Principal /> : 
                </div>
            </div>);
    }
}

export default TelaInicial;