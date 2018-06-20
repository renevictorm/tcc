import React, { Component } from "react";
import ReactDOM from "react-dom";
import store from "../../store/index.js";

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
class NovoProjetoEsimativa extends Component {
    componentDidMount() {
        window.$('select').material_select()
    }
    render() {
        return <div className="row  center">
            <form className="socorro" >
                <h1>Novo Projeto</h1>
                <div className="divider" />
                <br />
                <div className="input-field">
                    <input placeholder="" id="preco_estimado" type="text" className="validate" />
                    <label >Preço Estimado (Reais)</label>
                    <br />
                    <br />

                </div>
                <div className="row left">
                    <a className="waves-effect waves-light btn #1565c0 blue darken-3">
                        Estimar Preço
                        <i className="material-icons right">send</i>
                    </a>
                </div>
                <br />
                <br />
                
                <br />
                <br />
                <div className="input-field">
                    <input placeholder="" id="tempo_estimado" type="text" className="validate" />
                    <label >Tempo Estimado (Meses)</label>
                    <br />
                    <br />
                    <div className="row left">
                        <a className="waves-effect waves-light btn #1565c0 blue darken-3">
                            Estimar Tempo
                        <i className="material-icons right">send</i>
                        </a>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <div className="divider" />
                <br />
                <br />
                <br />


                <div className="col s4 offset-s4">
                    <ul id="slide-in" >

                        {NavButton("Adicionar Fase", "NovaFase", "add")}

                        <br />
                        {NavButton("Criar - Projeto", "UserInfo", "add")}

                    </ul>

                </div>

                <br />

                <br />


                <div className="col s4 offset-s4">
                    <ul id="slide-in" >



                    </ul>

                </div>

            </form>
        </div>
    }
}

export default NovoProjetoEsimativa;