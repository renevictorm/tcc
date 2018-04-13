import React, { Component } from "react";
import store from "../../store/index.js";
import UserInfo from "./UserInfo.js";
import Home from "./Home.js";
import NotFound from "../NotFound.js";
import NovoProjetoEstimativa from "./NovoProjetoEsimativa.js"
import CadastrarSemana from "./CadastrarSemana.js"
import CadastrarFuncionario from "./CadastrarFuncionario.js";
import Relatorios from "./Relatorios.js";
import BemVindo from "./BemVindo.js";
import NovoProjeto from "./NovoProjeto.js";
import NovaFase from "./NovaFase.js";
import AdicionarColaborador from "./AdicionarColaborador.js"
class Principal extends Component {
    render() {
        switch(store.getState().navigation) {
            case 'UserInfo':
                return <BemVindo />
            case 'NovaFase':
                return <NovaFase />
            case 'CadastrarFuncionario':
                return <CadastrarFuncionario />
            case 'NovoProjeto':
                return <NovoProjeto />
            case 'NovoProjetoEstimativa':
                return <NovoProjetoEstimativa />
            case 'AdicionarColaborador':
                return <AdicionarColaborador />
            case 'Relatorios':
                return <Relatorios />
            default:
                return <NotFound />
        }
    }
}

export default Principal;