import React, { Component } from "react"

class NovoFechamentoCaixa extends Component {

    componentDidMount() {
        window.$('ul.tabs').tabs();
        window.$('select').material_select();
    }

    render() {
        return <div className="col s12" style={{ paddingTop: "20px" }}>

            <div className="row">
                <div className="col s4">
                    <div className="input-field">
                        <input id="notas-100" type="number" min="1" max="10000" step="1" />
                        <label for="notas-100">Notas de R$ 100,00</label>
                    </div>
                </div>

                <div className="col s4">
                    <div className="input-field">
                        <input id="notas-50" type="number" min="1" max="10000" step="1" />
                        <label for="notas-50">Notas de R$ 50,00</label>
                    </div>
                </div>

                <div className="col s4">
                    <div className="input-field">
                        <input id="notas-20" type="number" min="1" max="10000" step="1" />
                        <label for="notas-20">Notas de R$ 20,00</label>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col s4">
                    <div className="input-field">
                        <input id="notas-10" type="number" min="1" max="10000" step="1" />
                        <label for="notas-10">Notas de R$ 10,00</label>
                    </div>
                </div>

                <div className="col s4">
                    <div className="input-field">
                        <input id="notas-5" type="number" min="1" max="10000" step="1" />
                        <label for="notas-5">Notas de R$ 5,00</label>
                    </div>
                </div>

                <div className="col s4">
                    <div className="input-field">
                        <input id="notas-2" type="number" min="1" max="10000" step="1" />
                        <label for="notas-2">Notas de R$ 2,00</label>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col s4">
                    <div className="input-field">
                        <input id="moedas-1" type="number" min="1" max="10000" step="1" />
                        <label for="moedas-1">Moedas de R$ 1,00</label>
                    </div>
                </div>

                <div className="col s4">
                    <div className="input-field">
                        <input id="moedas-050" type="number" min="1" max="10000" step="1" />
                        <label for="moedas-050">Moedas de R$ 0,50</label>
                    </div>
                </div>

                <div className="col s4">
                    <div className="input-field">
                        <input id="moedas-025" type="number" min="1" max="10000" step="1" />
                        <label for="moedas-025">Moedas de R$ 0,25</label>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col s4">
                    <div className="input-field">
                        <input id="moedas-010" type="number" min="1" max="10000" step="1" onBlur="calcular();" />
                        <label for="moedas-010">Moedas de R$ 0,10</label>
                    </div>
                </div>

                <div className="col s4">
                    <div className="input-field">
                        <input id="moedas-005" type="number" min="1" max="10000" step="1" onBlur="calcular();" />
                        <label for="moedas-005">Moedas de R$ 0,05</label>
                    </div>
                </div>

                <div className="col s4">
                    <div className="input-field">
                        <input id="moedas-001" type="number" min="1" max="10000" step="1" onBlur="calcular();" />
                        <label for="moedas-001">Moedas de R$ 0,01</label>
                    </div>
                </div>
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

export default NovoFechamentoCaixa