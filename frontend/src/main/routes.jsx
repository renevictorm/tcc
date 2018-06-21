import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'
import Todo from '../todo/todo'
import About from '../about/about'
import Colaborador from '../colaborador/colaborador'
import ColaboradorP from '../colaborador/colaboradorPesquisa'
import ColaboradorE from '../colaborador/colaboradorEdit'
import Welcome from './principal/BemVindo'
import Relatorios from './principal/Relatorios';
import UserInfo from './principal/UserInfo';
import NovoProjeto from './principal/NovoProjeto';



export default props => (
    <Router history={hashHistory}>
        <Route path='/bemvindo' component={Welcome} /> 
        <Route path='/novoprojeto' component={NovoProjeto} />      
        <Route path='/todos' component={Todo} />
        <Route path='/colaborador' component={Colaborador} />
        <Route path='/colaboradorp' component={ColaboradorP} />
        <Route path='/colaboradore' component={ColaboradorE} />
        <Route path='/about' component={About} />
        <Redirect from='*' to='/bemvindo' />
    </Router>

)