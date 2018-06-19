import React, { Component } from "react";
import ReactDOM from "react-dom";
import store from "../../store/index.js";

class CadastroMetasLoja extends Component {
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
                <h5>Cadastre os prêmios referentes a cada semana</h5>
            </div>
            <div className="row">
                <div className="col s6">
                    <h6>Selecione o mês</h6>
                    <input type="text" className="datepicker" />
                </div>
            </div>
            <div className="row">
                <div className="col s6">
                    <h6>Meta semanal 1</h6>
                    <input type="text" placeholder="Valor" />
                </div>
            </div>
            <div className="row">
                <div className="col s6">
                    <h6>Meta semanal 2</h6>
                    <input type="text" placeholder="Valor" />
                </div>
            </div>
            <div className="row">
                <div className="col s6">
                    <h6>Meta semanal 3</h6>
                    <input type="text" placeholder="Valor" />
                </div>
            </div>
            <div className="row">
                <div className="col s6">
                    <h6>Meta semanal 4</h6>
                    <input type="text" placeholder="Valor" />
                </div>
            </div>
            <button className="btn waves-effect waves-light col s2 offset-s4" type="submit" name="action">Salvar
            <i className="material-icons right">send</i>
            </button>
        </div>;
    }
}

export default CadastroMetasLoja;