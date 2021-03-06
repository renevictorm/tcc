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
class NovaFase extends Component {
    componentDidMount() {
        window.$('select').material_select()
    }
    render() {
        return <div className="row  center">
            <form className="col s6 " >
                <h1>Adicionar Fase</h1>
                <div className="divider" />
                <div className="input-field">
                    <input placeholder="" id="Nome_Fase" type="text" className="validate" />
                    <label for="preco_estimado">Nome</label>
                    
                </div>
                <div className="input-field">
                    <textarea name="Text1" cols="40" rows="20" wrap="hard">Descrição</textarea>
                  
                   
                </div>
               
               
          
                
                    <div className="col s4 offset-s4">
               
                    
                    <ul  id="slide-in" >{NavButton("Add", "AdicionarColaborador", "add")}Adicionar Colaborador</ul>
                            <table  Alingn = "center" >
                            
                                <tr>
                                    <th><ul id="slide-in" >{NavButton("Adicionar Fase", "NovoProjetoEstimativa")}</ul></th>
                                    <th><ul id="slide-in" >{NavButton("Cancelar", "NovoProjetoEstimativa")}</ul></th>
                                    
                                </tr>                
                                                            
                                
                            </table>
                    
                        
                    
                    
                
                    </div>
            
           
            </form>
        </div>
    }
}

export default NovaFase;