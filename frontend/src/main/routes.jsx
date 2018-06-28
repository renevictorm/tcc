import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'
import Todo from '../todo/todo'
import About from '../about/about'
import Cliente from '../cliente/cliente'
import Colaborador from '../colaborador/colaborador'
import Competencia from '../competencia/competencia'
import CompetenciaE from '../competencia/competenciaEdit'
import ColaboradorP from '../colaborador/colaboradorPesquisa'
import ClienteP from '../cliente/clientePesquisa'
import ClienteE from '../cliente/clienteEdit'
import ColaboradorE from '../colaborador/colaboradorEdit'
import Welcome from './principal/BemVindo'
import Relatorios from './principal/Relatorios';
import UserInfo from './principal/UserInfo';
import Projeto from '../projeto/projeto';
import Home from './principal/Home';
import ColaboradorVer from '../colaborador/colaboradorVerComp';



export default props => (
    <Router history={hashHistory}>
        <Route path='/bemvindo' component={Welcome} /> 
        <Route path='/projeto' component={Projeto} />      
        <Route path='/todos' component={Todo} />

        <Route path='/cliente' component={Cliente}/>
        <Route path='/clientep' component={ClienteP} />
        <Route path='/clientee' component={ClienteE} />
       
        <Route path='/competencia' component={Competencia} />
        <Route path='/competenciae' component={CompetenciaE} />
        <Route path='/colaboradore' component={ColaboradorE} />

        <Route path='/colaborador' component={Colaborador} />
        <Route path='/colaboradorp' component={ColaboradorP} />
        <Route path='/colaboradorpp' component={ColaboradorP} />
        <Route path='/colaboradore' component={ColaboradorE} />
        <Route path='/colaboradorver' component={ColaboradorVer} />
        
        <Route path='/about' component={About} />
        <Redirect from='*' to='/bemvindo' />
    </Router>

)