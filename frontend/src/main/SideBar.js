import React from 'react';
import store from '../store/index.js';

const NavButton = (texto, to, icone) => {

    switch (texto) {
        case 'home':
            return <li>
                <a href='#/bemvindo' className="waves-effect waves btn #1565c0 blue darken-1">
                    <h7 className="color:#FFFFFF hide-on-med-and-down" >{texto}</h7>
                    <i className="material-icons left">{icone}</i>
                </a>
            </li>;
        case 'Novo Cliente':
            return <li>
                <a href='#/cliente' className="waves-effect waves btn #1565c0 blue darken-1">
                    <h7 className="color:#FFFFFF hide-on-med-and-down" >{texto}</h7>
                    <i className="material-icons left">{icone}</i>
                </a>
            </li>;
        case 'Nova Competência':
            return <li>
                <a href='#/competencia' className="waves-effect waves btn #1565c0 blue darken-1">
                    <h7 className="color:#FFFFFF hide-on-med-and-down" >{texto}</h7>
                    <i className="material-icons left">{icone}</i>
                </a>
            </li>;
        case 'Novo Colaborador':
            return <li>
                <a href='#/colaborador' className="waves-effect waves btn #1565c0 blue darken-1">
                    <h7 className="color:#FFFFFF hide-on-med-and-down" >{texto}</h7>
                    <i className="material-icons left">{icone}</i>
                </a>
            </li>;
        case 'Novo Projeto':
            return <li>
                <a href='#/projeto' className="waves-effect waves btn #1565c0 blue darken-1">
                    <h7 className="color:#FFFFFF hide-on-med-and-down" >{texto}</h7>
                    <i className="material-icons left">{icone}</i>
                </a>
            </li>;
        case 'Pesquisar Projeto':
            return <li>
                <a href='#/projetoP' className="waves-effect waves btn #1565c0 blue darken-1">
                    <h7 className="color:#FFFFFF hide-on-med-and-down" >{texto}</h7>
                    <i className="material-icons left">{icone}</i>
                </a>
            </li>;
        case 'Pesquisar Cliente':
            return <li>
                <a href='#/clienteP' className="waves-effect waves btn #1565c0 blue darken-1">
                    <h7 className="color:#FFFFFF hide-on-med-and-down" >{texto}</h7>
                    <i className="material-icons left">{icone}</i>
                </a>
            </li>;
        case 'Pesquisar Colaborador':
            return <li>
                <a href='#/colaboradorP' className="waves-effect waves btn #1565c0 blue darken-1">
                    <h7 className="color:#FFFFFF hide-on-med-and-down" >{texto}</h7>
                    <i className="material-icons left">{icone}</i>
                </a>
            </li>;

    }

}
/*
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
*/
const SideBar = () => {
    if (store.getState().lojaAtual == null) {
        return <div id="SideBar">
            <ul id="slide-in" className="side-nav btn #1565c0 blue darken-2 ">

                {NavButton("home", "UserInfo", "home")}

                {NavButton("Nova Competência", "NovoCompetencia", "receipt")}

                <div className="divider blue lighten-3" />

                {NavButton("Novo Projeto", "NovoProjeto", "create")}

                {NavButton("Pesquisar Projeto", "PesquisarProjeto", "search")}

                <div className="divider blue lighten-3" />

                {NavButton("Novo Cliente", "NovoCliente", "add")}

                {NavButton("Pesquisar Cliente", "PesquisarCliente", "search")}

                <div className="divider blue lighten-3" />

                {NavButton("Novo Colaborador", "NovoColaborador", "assignment_ind")}

                {NavButton("Pesquisar Colaborador", "PesquisarColaborador", "search")}

            </ul>
        </div>;
    }
    else {
        return <div id="SideBar">
            <ul id="slide-in" className="side-nav btn #1565c0 blue darken-2">
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