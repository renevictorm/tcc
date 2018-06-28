import React, { Component } from "react"
import { connect } from 'react-redux'
import Grid from '../template/grid'
import { bindActionCreators } from 'redux'
import {
    searchCliente,
    changeNameCliente, changeTelefoneCliente, changePrefCliente, changeCpfCliente, changeCnpjCliente, changeEmailCliente,
    changeEnderecoCliente, changeIdentidadeCliente, changecaptacaoCliente, changeEmpresaCliente, addCliente, changeEditCliente, editCliente, clearCliente
} from './clienteActions'

class ClienteForm extends Component {
    constructor(props) {
        super(props)

        this.getVALUE = this.getVALUE.bind(this)

    }


    componentWillMount() {
       // this.props.clearCliente()
        this.props.searchCliente()
    }



    getVALUE() {
        const {editCliente, cliente, nameCliente, emailCliente, telefoneCliente, prefCliente, identidadeCliente,
            cnpjCliente, cpfCliente, enderecoCliente, captacaoCliente, empresaCliente, isEditedCliente } = this.props
        const eee = false
        
        editCliente(isEditedCliente,cliente ,nameCliente, emailCliente, telefoneCliente, prefCliente, identidadeCliente, cnpjCliente, cpfCliente, enderecoCliente, eee, empresaCliente)
        alert(emailCliente)

    }



    render() {
        const { addCliente, searchCliente, nameCliente, emailCliente, telefoneCliente, prefCliente, identidadeCliente,
            cnpjCliente, cpfCliente, enderecoCliente, captacaoCliente, empresaCliente, isEditedCliente } = this.props
        return <div style={{ paddingTop: "20px" }}>
            <Grid cols='12 9 10'>
                <h1>Novo Cliente</h1>
                <div className="socorro2">

                    <br />
                    <div className="center"><b>Nome:</b></div>
                    <div className="input-field" >


                        <input id="tipo" type="text"
                            placeholder='Nome'

                            onChange={this.props.changeNameCliente}

                            value={this.props.nameCliente}                >
                        </input>

                    </div>

                    <br />
                    <div className="center"><b>Email:</b></div>
                    <div className="input-field">
                        <input id="email" type="text"
                            placeholder='Email'

                            onChange={this.props.changeEmailCliente}

                            value={this.props.emailCliente} >
                        </input>

                    </div>
                    <br />
                    <div className="center"><b>Telefone:</b></div>
                    <div className="input-field">
                        <input id="telefone" type="text"
                            placeholder="Telefone"
                            onChange={this.props.changeTelefoneCliente}

                            value={this.props.telefoneCliente} >
                        </input>


                    </div>
                    <br />
                    <div className="center"><b>Contato Preferencial:</b></div>
                    <div className="input-field">
                        <input id="pref" type="text"
                            placeholder="Contato Preferencial"
                            onChange={this.props.changePrefCliente}

                            value={this.props.prefCliente}  >
                        </input>
                    </div>
                    <br />
                    <div className="center"><b>Identidade:</b></div>
                    <div className="input-field">
                        <input id="identidade" type="text"
                            placeholder="IDENTIDADE"
                            onChange={this.props.changeIdentidadeCliente}

                            value={this.props.identidadeCliente}>
                        </input>
                    </div>
                    <br />
                    <div className="center"><b>CNPJ:</b></div>
                    <div className="input-field">
                        <input id="cnpj" type="text"
                            placeholder="CNPJ"
                            onChange={this.props.changeCnpjCliente}

                            value={this.props.cnpjCliente} >
                        </input>
                    </div>
                    <br />
                    <div className="center"><b>CPF:</b></div>
                    <div className="input-field">
                        <input id="cpf" type="text"
                            placeholder="CPF"
                            onChange={this.props.changeCpfCliente}

                            value={this.props.cpfCliente} >
                        </input>

                    </div>




                    <br />
                    <div className="center"><b>Endereço:</b></div>
                    <div className="input-field">
                        <input id="endereco" type="text"
                            placeholder="ENDEREÇO"
                            onChange={this.props.changeEnderecoCliente}

                            value={this.props.enderecoCliente} >
                        </input>
                    </div>


                    <br />
                    <div className="center"><b>Empresa:</b></div>
                    <div className="input-field">
                        <input id="empresa" type="text"
                            placeholder="EMPRESA"
                            onChange={this.props.changeEmpresaCliente}

                            value={this.props.empresaCliente}>
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

const mapStateToProps = state => ({
    nameCliente: state.cliente.nameCliente, emailCliente: state.cliente.emailCliente, prefCliente: state.cliente.prefCliente
    , telefoneCliente: state.cliente.telefoneCliente, identidadeCliente: state.cliente.identidadeCliente, cpfCliente: state.cliente.cpfCliente, cnpjCliente: state.cliente.cnpjCliente
    , enderecoCliente: state.cliente.enderecoCliente, captacaoCliente: state.cliente.captacaoCliente, empresaCliente: state.cliente.empresaCliente, isEditedCliente: state.cliente.isEditedCliente
})
const mapDispatchToProps = dispatch =>
    bindActionCreators({
        changeNameCliente, changeTelefoneCliente, changePrefCliente, changeCpfCliente, changeCnpjCliente, changeEmailCliente, searchCliente,
        changeEmailCliente, changeEnderecoCliente, changeIdentidadeCliente, changecaptacaoCliente, changeEmpresaCliente, addCliente, changeEditCliente, editCliente, clearCliente
    }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ClienteForm)
