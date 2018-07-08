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
import ProjetoP from '../projeto/projetoPesquisa'
import Home from './principal/Home';
import ColaboradorVer from '../colaborador/colaboradorVerComp';
import projetoVer from '../projeto/projetoVerClientes';
import projetoEdit from '../projeto/projetoEdit';
import projetoAddCliente from '../projeto/projetoAddCliente';
import ClienteVer from '../cliente/clienteVer';
import faseForm from '../fase/faseForm';
import faseEdit from '../fase/faseEdit';
import faseVer from '../fase/faseVer';
import faseAddColaborador from '../fase/faseAddColaborador';
import arquivoForm from '../arquivos/arquivoForm';
import arquivoPesquisa from '../arquivos/arquivoPesquisa';



export default props => (
    <Router history={hashHistory}>
        <Route path='/bemvindo' component={Welcome} />
        <Route path='/todos' component={Todo} />

        <Route path='/projeto' component={Projeto} />
        <Route path='/projetop' component={ProjetoP}/>
        <Route path='/projetopp' component={ProjetoP}/>
        <Route path='/projetover' component={projetoVer}/>
        <Route path='/projetoe' component={projetoEdit}/>
        <Route path='/projetoaddcliente' component={projetoAddCliente}/>

        <Route path='/fase' component={faseForm}/>
        <Route path='/fasee' component={faseEdit}/>
        <Route path='/fasever' component={faseVer}/>
       
        <Route path='/arquivo' component={arquivoForm}/>
        <Route path='/arquivover' component={arquivoPesquisa}/>

        <Route path='/faseaddcolaborador' component={faseAddColaborador}/>
        

        <Route path='/cliente' component={Cliente} />
        <Route path='/clientep' component={ClienteP} />
        <Route path='/clientee' component={ClienteE} />
        <Route path='/clientever' component={ClienteVer} />

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