import React, { Component } from "react"

import NovoFuncionario from "./NovoFuncionario.js"

class CadastrarFuncionario extends Component {
    componentDidMount() {
        window.$('ul.tabs').tabs();
    }

    render() {
        return <div className="row">
            <div className="col s12">
                <ul id="tabs-funcionario" className="tabs black-text">
                    <li className="tab col s3"><a className="active" href="#cadastrar-usuarios">Novo usuário</a></li>
                    <li className="tab col s3"><a href="#listar-usuarios">Todos usuários</a></li>
                </ul>
                <div id="cadastrar-usuarios" className="col s12">
                    <NovoFuncionario />
                </div>
                <div id="listar-usuarios" className="col s12">Test 2</div>
            </div>
        </div>
    }
}

export default CadastrarFuncionario