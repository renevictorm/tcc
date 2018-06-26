import React, { Component } from "react"
import { connect } from 'react-redux'
import Grid from '../template/grid'
import { bindActionCreators } from 'redux'
import {changeNameCliente,changeTelefoneCliente,changePrefCliente,changeCpfCliente,changeCnpjCliente,changeEmailCliente,
changeEmailCliente, changeEnderecoCliente, changeIdentidadeCliente, changeCapitacaoCliente,changeEmpresaCliente,addCliente,changeEditCliente,editCliente,clearCliente } from './clienteActions'

class NovoCliente extends Component {
    constructor(props) {
        super(props)
       // this.keyHandler = this.keyHandler.bind(this)
        //this.getVALUE = this.getVALUE.bind(this)
       
    }


    componentWillMount() {
        //this.props.clear()
        //this.props.search()
    }
      /*
    keyHandler(e) {
        const { add, search, name, tipoUsuario, clear, matricula } = this.props
        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(name)
        } else if (e.key === 'Escape') {
            clear()
        }
    }

    getVALUE() {
        const { } = this.props
        if (isNaN(this.props.tipoUsuario) || (this.props.tipoUsuario) < 1 || (this.props.tipoUsuario) > 3) {
            alert("O Campo 'Tipo de Usuário' deve ser um número de 1 a 3: \n 1: Super admin \n 2: Admin \n 3: Usuário ")
        } else {
            add(name, tipoUsuario, matricula, cpf, email, emailAlternative, endereco, identidade, cargo,
                login, senha, dataNascimento, dataEntrada, dataSaida, camisa, status)
        }

    }
  
       const { add, search, name, tipoUsuario, matricula, email, emailAlternative, cpf, endereco, identidade, cargo,
            login, senha, dataNascimento, dataEntrada, dataSaida, camisa, status } = this.props              
    */
    render() {
       
        return <div style={{ paddingTop: "20px" }}>
            <Grid cols='12 9 10'>
            <h1>Novo Funcionário</h1>
                <div className="socorro2">
                <br />

                <div className="input-field" >


                    <input id="tipo" type="range" min="1" max="3"
                        placeholder='Tipo de Usuário'

                        onChange={this.props.changeTipoUsuario}
                        onKeyUp={this.keyHandler}
                        value={this.props.tipoUsuario}                >
                    </input>

                </div>


                <div className="input-field">
                    <input id="name" type="text"
                        placeholder='Nome'

                        onChange={this.props.changeName}
                        onKeyUp={this.keyHandler}
                        value={this.props.name} >
                    </input>

                </div>

                <div className="input-field">
                    <input id="matricula" type="text"
                        placeholder="Matrícula"
                        onChange={this.props.changeMatricula}
                        onKeyUp={this.keyHandler}
                        value={this.props.matricula} >
                    </input>


                </div>

                <div className="input-field">
                    <input id="cpf" type="text"
                        placeholder="CPF"
                        onChange={this.props.changeCpf}
                        onKeyUp={this.keyHandler}
                        value={this.props.cpf} >
                    </input>

                </div>

                <div className="input-field">
                    <input id="email" type="text"
                        placeholder="EMAIL"
                        onChange={this.props.changeEmail}
                        onKeyUp={this.keyHandler}
                        value={this.props.email}  >
                    </input>
                </div>

                <div className="input-field">
                    <input id="emailAlternative" type="text"
                        placeholder="EMAIL ALTERNATIVO"
                        onChange={this.props.changeEmailAlternative}
                        onKeyUp={this.keyHandler}
                        value={this.props.emailAlternative} >
                    </input>
                </div>

                <div className="input-field">
                    <input id="endereco" type="text"
                        placeholder="ENDEREÇO"
                        onChange={this.props.changeEndereco}
                        onKeyUp={this.keyHandler}
                        value={this.props.endereco} >
                    </input>
                </div>


                <div className="input-field">
                    <input id="identidade" type="text"
                        placeholder="IDENTIDADE"
                        onChange={this.props.changeIdentidade}
                        onKeyUp={this.keyHandler}
                        value={this.props.identidade}>
                    </input>
                </div>

                <div className="input-field">
                    <input id="cargo" type="text"
                        placeholder="CARGO"
                        onChange={this.props.changeCargo}
                        onKeyUp={this.keyHandler}
                        value={this.props.cargo}>
                    </input>
                </div>

                <div className="input-field">
                    <input id="login" type="text"
                        placeholder="LOGIN"
                        onChange={this.props.changeLogin}
                        onKeyUp={this.keyHandler}
                        value={this.props.login}>
                    </input>
                </div>

                <div className="input-field">
                    <input id="senha" type="password"
                        placeholder="SENHA"
                        onChange={this.props.changeSenha}
                        onKeyUp={this.keyHandler}
                        value={this.props.senha}>
                    </input>
                </div>

              

                <div className="row">
                    <div className="center">
                        <a className="waves-effect waves-light btn"
                            onClick={() => [

                                this.getVALUE()

                            ]

                            }>
                            Salvar
                        <i className="material-icons right">send</i>
                        </a>
                    </div>
                </div>
                </div>
            </Grid>

        </div>

    }
}

const mapStateToProps = state => ({     })
const mapDispatchToProps = dispatch =>
    bindActionCreators({ changeNameCliente,changeTelefoneCliente,changePrefCliente,changeCpfCliente,changeCnpjCliente,changeEmailCliente,
        changeEmailCliente, changeEnderecoCliente, changeIdentidadeCliente, changeCapitacaoCliente,changeEmpresaCliente,addCliente,changeEditCliente,editCliente,clearCliente   }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(NovoProjeto)
