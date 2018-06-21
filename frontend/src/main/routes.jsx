import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'
import Todo from '../todo/todo'
import About from '../about/about'
import Colaborador from '../colaborador/colaborador'
import ColaboradorP from '../colaborador/colaboradorPesquisa'
import Welcome from './principal/BemVindo'



export default props => (
    <Router history={hashHistory}>
        <Route path='/bemvindo' component={Welcome} />    
        <Route path='/todos' component={Todo} />
        <Route path='/colaborador' component={Colaborador} />
        <Route path='/colaboradorp' component={ColaboradorP} />
        <Route path='/about' component={About} />
        <Redirect from='*' to='/bemvindo' />
    </Router>

)