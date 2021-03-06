import React from 'react';
import store from '../store/index.js';

const NavButton = (texto, to, icone) => {
    return <li>
        <a className="waves-effect waves btn #1565c0 blue darken-3"
            onClick={() => {
                if (to === "Home" || to === "UserInfo") {
                    store.dispatch({
                        type: "SAIR_LOJA",
                    })
                }
                store.dispatch({
                    type: 'NAVIGATE',
                    to: to
                })
            }
            }>
            {texto}
            <i className="material-icons left">{icone}</i>
        </a>
    </li>;
}

const SideBar = () => {
    if (store.getState().lojaAtual == null) {
        return <div id="SideBar">
            <ul id="slide-in" className="side-nav btn #1565c0 blue darken-3">
                {NavButton("Olá, " + store.getState().usuarioAtual.username, "UserInfo", "home")}
                
                {NavButton("Novo Projeto", "NovoProjeto", "add")}
             
            </ul>
        </div>;
    }
    else {
        return <div id="SideBar">
            <ul id="slide-in" className="side-nav btn #1565c0 blue darken-3">
                {NavButton("Olá, " + store.getState().usuarioAtual.username, "UserInfo", "perm_identity")}
                {NavButton("Home", "Home", "home")}
                {NavButton("Controle", "ControleLoja", "pie_chart")}
                {NavButton("Novos Dados", "NovosDadosLoja", "add")}
                {NavButton("Relatório", "RelatorioLoja", "show_chart")}
                {NavButton("Cadastro de Metas", "CadastroMetasLoja", "attach_money")}
            </ul>
        </div>;
    }
}

export default SideBar;