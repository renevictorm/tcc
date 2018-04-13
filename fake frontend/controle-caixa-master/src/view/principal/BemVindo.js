import React, { Component } from "react";
import ReactDOM from "react-dom";
import store from "../../store/index.js";

class UserInfo extends Component {
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
                  
                <div className="divider " />
                <br/> 
                <br/>
                <br/>
                <br/> 
                <h1><strong> BEM VINDO!</strong>  {usuarioAtual.nivelAcesso}</h1>
                <h2>{usuarioAtual.username} </h2>
            </div>

            
        </div>;
    }
}

export default UserInfo;