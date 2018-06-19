import React, { Component } from "react";
import ReactDOM from "react-dom";
import store from "../../store/index.js";

class UserInfo extends Component {
    componentDidMount() {
        const dom = ReactDOM.findDOMNode(this);

        dom.style.transition = "all 0.5s";
        dom.style.opacity = 0;

        setTimeout(() => dom.style.opacity = 1);
    }

    render() {
        const usuarioAtual = store.getState().usuarioAtual;
        return <div className="row">
            <div className="col s12">
                <h5>Dados pessoais</h5>
                <div className="divider" />
                <p><strong>{usuarioAtual.username}</strong> - {usuarioAtual.nivelAcesso}</p>
                <p><strong>Email:</strong> {usuarioAtual.email}</p>
                <p><strong>CPF:</strong> {usuarioAtual.CPF}</p>
                <p><strong>Endereço:</strong> {usuarioAtual.endereco}</p>
                <p><strong>Telefone:</strong> {usuarioAtual.telefone}</p>
                <p><strong>Data de nascimento:</strong> {usuarioAtual.dataNascimento}</p>
            </div>

            <div className="col s2 offset-s5">
                <a className="btn waves" style={{display: "block"}}>Editar dados</a>
            </div>
        </div>;
    }
}

export default UserInfo;