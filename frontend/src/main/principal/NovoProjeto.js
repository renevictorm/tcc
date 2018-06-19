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
class NovoProjeto extends Component {
    
    componentDidMount() {
        window.$('select').material_select()
    }
 
    render() {
        return <div className="socorro">
            <form  className="col s10  " >
                <h1>Novo Projeto</h1>
                <div className="divider" />
                <div className="input-field">
                    <input placeholder="" id="Nome" type="text" className="validate"  />
                    <label for="preco_estimado">Nome</label>
                   
                </div>
                <div className="input-field">
                    <input placeholder="" id="tempo_estimado" type="text" className="validate" />
                    <label for="tempo_estimado">Tipo de Projeto</label>
                   
                </div>
                <div className="input-field">
                    <input placeholder="" id="Nome_Cliente" type="text" className="validate" />
                    <label for="tempo_estimado">Nome do Cliente</label>
                   
                </div>
                <div className="input-field">
                    <input placeholder="" id="CPF_CNPJ_Clinete" type="text" className="validate" />
                    <label for="tempo_estimado">CPF ou CNPJ do Cliente</label>
                   
                </div>
                <div className="input-field">
                    <input placeholder="" id="Endereco_Cliente" type="text" className="validate" />
                    <label for="tempo_estimado">Endereço do Cliente</label>
                   
                </div>
                <br/>   
                <br/>          
           
                <div className="row">
                    <div className="col s4 offset-s4">
                    <ul id="slide-in" >
                                        
                    {NavButton("Continuar", "NovoProjetoEstimativa")}
                 
                    </ul>
                       
                    </div>
                </div>
            </form>
        </div>
    }
}

export default NovoProjeto;