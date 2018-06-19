import React, { Component } from "react";
import store from "../../store/index.js";
import ControleLoja from "./ControleLoja.js";
import CadastroMetasLoja from "./CadastroMetasLoja.js";
import NovosDadosLoja from "./NovosDadosLoja.js";
import RelatorioLoja from "./RelatorioLoja.js";
import NotFound from "../NotFound.js";

class PrincipalLoja extends Component {
    render() {
        switch(store.getState().navigation) {
            case 'ControleLoja':
                return <ControleLoja />
            case 'NovosDadosLoja':
                return <NovosDadosLoja />
            case 'CadastroMetasLoja':
                return <CadastroMetasLoja />
            case 'RelatorioLoja':
                return <RelatorioLoja />
            default:
                return <ControleLoja />
        }
    }
}

export default PrincipalLoja;