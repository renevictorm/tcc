import React, { Component } from "react"

class NovaRetirada extends Component {
    componentDidMount() {
        window.$('select').material_select();
    }

    render() {
        return <div className="col s6" style={{ paddingTop: "20px" }}>

            <div className="input-field">
                <input id="valor-retirado" type="number" min="0.00" max="1000000.00" step="0.01" />
                <label for="valor-retirado">Valor Retirado</label>
            </div>

            <div className="input-field">
                <input id="motivo" type="text" />
                <label for="motivo">Motivo</label>
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

export default NovaRetirada