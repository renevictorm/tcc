import React, { Component } from "react"

class NovaVendaCartao extends Component {
    componentDidMount() {
        window.$('select').material_select();
    }

    render() {
        return <div className="col s6" style={{ paddingTop: "20px" }}>

            <div className="input-field">
                <input id="valor-compra" type="number" min="0.00" max="1000000.00" step="0.01" />
                <label for="valor-compra">Valor da Compra</label>
            </div>

            <div class="input-field col s12">
                <select>
                    <option value="" disabled selected>Tipo do cartão</option>
                    <option value="1">Crédito</option>
                    <option value="2">Débito</option>
                </select>
                <label>Tipo do cartão</label>
            </div>

            <div className="input-field">
                <input id="observacao" type="text" />
                <label for="observacao">Observação</label>
            </div>

            <div className="input-field">
                <input id="bandeira" type="text" />
                <label for="bandeira">Bandeira</label>
            </div>

            <div className="row">
                <div className="col s4 offset-s4">
                    <a className="waves-effect waves-light btn">
                        Salvar
                        <i className="material-icons right">send</i>
                    </a>
                </div>
            </div>
        </div>;
    }
}

export default NovaVendaCartao