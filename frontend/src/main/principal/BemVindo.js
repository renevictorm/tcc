import React, { Component } from "react";
import ReactDOM from "react-dom";
import store from "../../store/index.js";
import Grid from "../../template/grid";
class UserInfo extends Component {
    componentDidMount() {
        const dom = ReactDOM.findDOMNode(this);

        dom.style.transition = "all 0.5s";
        dom.style.opacity = 0;

        setTimeout(() => dom.style.opacity = 9);
    }

    render() {
        const usuarioAtual = store.getState().usuarioAtual;
        return <div className="row">
            <Grid cols='12 9 10'>
            <div className="col s12">
                  
                <div className="divider " />
                <br/> 
                <br/>
                <br/>
                <br/> 
                <h1><strong> BEM VINDO!</strong>  {usuarioAtual.nivelAcesso}</h1>
                <h2>{usuarioAtual.name} </h2>
            </div>

            </Grid>
        </div>;
    }
}

export default UserInfo;