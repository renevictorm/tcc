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
            <form className="col s6 " >
                <h1>Novo Projeto</h1>
                <div className="divider" />
                <div className="input-field">
                    <input placeholder="" id="preco_estimado" type="text" className="validate" />
                    <label for="preco_estimado">Preço Estimado (Reais)</label>
                    <a className="waves-effect waves-light btn #1565c0 blue darken-3">
                            Estimar Preço
                        <i className="material-icons right">send</i>
                        </a>
                </div>
                <div className="input-field">
                    <input placeholder="" id="tempo_estimado" type="text" className="validate" />
                    <label for="tempo_estimado">Tempo Estimado (Meses)</label>
                    <a className="waves-effect waves-light btn #1565c0 blue darken-3">
                            Estimar Tempo
                        <i className="material-icons right">send</i>
                        </a>
                </div>
               
                <br/> 
                <div className="divider" />  
                <br/>          
           
                
                    <div className="col s4 offset-s4">
                        <ul id="slide-in" >
                                            
                            {NavButton("Adicionar Fase", "NovaFase", "add")}
                    
                        </ul>
                    
                    </div>
                    
                <br/>  
             
                <br/>          
           
                
                    <div className="col s4 offset-s4">
                        <ul id="slide-in" >
                                            
                            {NavButton("Criar Projeto", "UserInfo")}
                    
                        </ul>
                    
                    </div>
           
            </form>
        </div>
    }
}

export default NovoProjetoEsimativa;