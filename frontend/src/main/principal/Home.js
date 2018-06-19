import React, { Component } from "react";
import ReactDOM from "react-dom";
import store from "../../store/index.js";

class Loja extends Component {
    render() {
        return <div className="col s4">
            <div className="card teal lighten-1">
                <div className="card-content white-text" onClick={e => store.dispatch({
                        type: 'SELECIONA_LOJA',
                        idLoja: this.props.id
                        })}>
                    <a className="card-title center white-text" style={{cursor: "pointer"}}>{this.props.nome}</a>
                    <ul>
                        <li>Local: bananas</li>
                    </ul>
                </div>
                <div className="card-action teal darken-2">
                    <a className="center btn" style={{cursor: "pointer"}}>Editar</a>
                    <a className="center btn red darken-4" style={{float:"right", cursor: "pointer"}}>Excluir</a>
                </div>
            </div>
        </div>;
    }
}

class Home extends Component {
    componentDidMount() {
        const dom = ReactDOM.findDOMNode(this);

        dom.style.transition = "all 0.5s";
        dom.style.opacity = 0;

        setTimeout(() => dom.style.opacity = 1);
    }

    render() {
        const lojas = store.getState().usuarioAtual.lojas;

        return <div>
            <div className="row">
                <div className="col s12">
                    <h5>Selecione uma loja</h5>
                    <div className="divider" />
                    <div className="row">
                        {lojas.map(e => <Loja key={e.id} {...e} />)}
                    </div>
                </div>
                <div className="col s6">
                    <p><strong><h5>Prêmios cadastrados</h5></strong></p>
                    <p><strong>Prêmio semanal: </strong>R$ </p>
                    <p><strong>Prêmio mensal: </strong>R$ </p>
                    <p><strong>Prêmio super meta: </strong>R$ </p>
                </div>
                <div className="col s6">
                    <p><strong><h5>Deixar em caixa</h5></strong></p>
                    <p><strong>Valor: </strong>R$ </p>
                </div>
            </div>
            <div className="row">
                <div className="col s6">
                    <a className="waves-effect waves-light btn">
                        Atualizar Prêmios
                        <i className="material-icons right">refresh</i>
                    </a>
                </div>
                <div className="col s6">
                    <a className="waves-effect waves-light btn">
                        Atualizar Fundos
                        <i className="material-icons right">refresh</i>
                    </a>
                </div>
            </div>
        </div>;
    }
}

export default Home;