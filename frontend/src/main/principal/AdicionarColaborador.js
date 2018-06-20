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
class AdicionarColaborador extends Component {
    componentDidMount() {
        window.$('select').material_select()
    }
    render() {
        return <div className="socorro">
            <form className="col s6 " >
                <h1>Adicionar Colaborador</h1>
                <div className="divider" />
                <div className="input-field">
                    <input placeholder="" id="Cargo" type="text" className="validate" />
                    <label >Cargo</label>
                    
                </div>
                <div className="input-field">
                <input placeholder="" id="Colaborador" type="text" className="validate" />
                <label >Colaborador</label>
                <a className="waves-effect waves-light btn #1565c0 blue darken-3">
                            Escolher automático
                        <i className="material-icons right">send</i>
                        </a>
                
            </div>
               
               
          
                
                    <div className="col s4 offset-s4">
                        
                            <table >
                            <tbody>
                                <tr>
                                    <th><ul id="slide-in" >{NavButton("Adicionar Fase", "NovaFase", "add")}</ul></th>
                                    <th><ul id="slide-in" >{NavButton("Cancelar", "NovaFase", "add")}</ul></th>
                                    
                                </tr>                
                                                            
                                </tbody>  
                            </table>
                    
                        
                    
                    
                
                    </div>
            
           
            </form>
        </div>
    }
}

export default AdicionarColaborador;