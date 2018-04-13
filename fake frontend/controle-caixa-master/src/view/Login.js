import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from '../store/index.js';

class Login extends Component {
    loading = false;
    
    componentDidMount() {
        const modal = ReactDOM.findDOMNode(this).firstElementChild;

        setTimeout(() => {
            modal.style.top = '10%';
        });
    }

    render() {
        
        return <div id="Login"> 
            
                <div className="modal white" >
                        
                <img class="responsive-img" src="http://www.centev.ufv.br/Recursos/Cemp-Empresas/Fotos/p18sqfa8a91e51ut31llu17c719373.png" width="300" height="212.25"/> 
                
                    <div className="modal-content">
                        
                        <div className="input-field">
                                <input type="text" onChange={(e) => {this.username = e.target.value;}}/>
                                <label>Email</label>
                        </div>
                            
                            <div className="input-field">
                                <input type="password" onChange={(e) => {this.password = e.target.value;}}/>
                                <label>Senha</label>
                            </div>

                    </div>

                    <a className="waves-effect waves-light btn #1565c0 blue darken-3"
                            onClick={e => this.tryLogin()}>
                            Login
                            <i className="material-icons right"></i>
                    </a>
                </div>
                    
                <div className="loading" style={{
                    opacity: this.loading ? 1 : 0,
                    zIndex: this.loading ? 1000 : -1
                }} />
        
        </div>;
    }

    tryLogin(username, password) {
        this.loading = true;
        this.forceUpdate();

        console.log(this.password, this.username);

        setTimeout(() =>
            store.dispatch({
                type: 'LOGIN_SUCESS',
                username: this.username,
                password: this.password,
                lojas: [{nome: "Banana1", id: 2}, {nome: "Banana2", id: 3}, {nome: "Banana2", id: 4}]
            }), 1000);
    }
}

export default Login;