import React, { Component } from "react"
import { connect } from 'react-redux'
import Grid from '../template/grid'
import { bindActionCreators } from 'redux'
import {
    changeNameCliente, changeTelefoneCliente, changePrefCliente, changeCpfCliente, changeCnpjCliente,
    changeEmailCliente, changeEnderecoCliente, changeIdentidadeCliente, changeCaptacaoCliente, changeEmpresaCliente,
    searchCliente, addCliente, changeEditCliente, editCliente, clearCliente
} from './clienteActions'



class ClienteVer extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
        this.getVALUE = this.getVALUE.bind(this)
        var escolha1;
    }
    handLinkClick(e) {



    }
    componentWillUnmount() {


    }

    componentWillMount() {
        //window.location.href = '#/bemvindo';
        window.history.replaceState('Object', 'bemvindo', '#/clientepp')

        this.props.searchCliente()
    }
    keyHandler(e) {
        const { addCliente, searchCliente, nameC, tipoUsuario, clear, matricula } = this.props
        if (e.key === 'Enter') {
            e.shiftKey ? searchCliente() : addCliente(name)
        } else if (e.key === 'Escape') {
            alert('aaa')//window.location.href = '#/bemvindo';
        }
    }

    getVALUE() {
        const { isEdited,  cliente ,nameCliente, emailCliente, telefoneCliente, prefCliente, identidadeCliente,cnpjCliente, cpfCliente, enderecoCliente, captacaoCliente,empresaCliente} = this.props


        editCliente(isEdited,  cliente ,nameCliente, emailCliente, telefoneCliente, prefCliente, identidadeCliente,cnpjCliente, cpfCliente, enderecoCliente, captacaoCliente,empresaCliente)


    }

    render() {
        const { editCliente, addCliente, searchC, cliente ,nameCliente, emailCliente, telefoneCliente, prefCliente, identidadeCliente,cnpjCliente, cpfCliente, enderecoCliente, captacaoCliente,empresaCliente} = this.props
        return <div onKeyUp={this.keyHandler} className="row" style={{ paddingTop: "20px" }}>

            <div className="col s4">
                <div className=" row teal lighten-1">
                    <div className=" row">
                        <div className="col s4">
                            <img className="responsive-imgr" src="https://instagram.fbhz2-1.fna.fbcdn.net/vp/970f06c2211709b380473535d4bad810/5BBB534A/t51.2885-15/e35/21149619_1720037108300122_2320621059671326720_n.jpg" />

                        </div>
                        <div className="card-content white-text col s8">
                            <ul >
                                <font size='5'><b>{nameCliente}</b></font><br />

                                <font size='4'><b>{empresaCliente}</b></font><br />

                                <font size='4'><b>{emailCliente}</b></font><br />

                                <font size='4'><b>{telefoneCliente}</b></font>
                            </ul>
                        </div>
                    </div>
                    <div className="card-action teal white-text center darken-2">
                        <ul >
                            <font size='5'><b>  {captacaoCliente}</b></font><br />
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col s8">
                <div className=" row teal lighten-1">
                    <div className=" row">
                        <div className="card-content white-text col s6">
                        <ul ><font size='4'><b>DADOS ADCIONAIS: </b></font><br /><br />
                       
                                <font size='4'><b>CPF: </b>{cpfCliente}</font><br />

                                <font size='4'><b>CNPJ: </b>{cnpjCliente}</font><br />

                                <font size='4'><b>IDENTIDADE: </b>{identidadeCliente}</font><br />

                                <font size='4'><b>CONTATO PREFERENCIAL: </b>{prefCliente}</font><br />



                            </ul>
                        </div>
                        <div className="card-content center white-text col s6">
                        <ul ><br /><br />
                            <font  size='4'><b> ENDEREÇO: </b> <br/>{enderecoCliente}</font><br />
                        </ul>
                        </div>

                    </div>
                  

                </div>

            </div>




        </div>

    }
}

const mapStateToProps = state => ({
    nameCliente: state.cliente.nameCliente, emailCliente: state.cliente.emailCliente,
    telefoneCliente: state.cliente.telefoneCliente, prefCliente: state.cliente.prefCliente,
    identidadeCliente: state.cliente.identidadeCliente, cnpjCliente: state.cliente.cnpjCliente,
    cpfCliente: state.cliente.cpfCliente, enderecoCliente: state.cliente.enderecoCliente,
    captacaoCliente: state.cliente.captacaoCliente, empresaCliente: state.cliente.empresaCliente,
    isEditedCliente: state.cliente.isEditedCliente, listCliente: state.cliente.listCliente
})
const mapDispatchToProps = dispatch =>
    bindActionCreators({
        changeNameCliente, changeTelefoneCliente, changePrefCliente, changeCpfCliente, changeCnpjCliente,
        changeEmailCliente, changeEnderecoCliente, changeIdentidadeCliente, changeCaptacaoCliente, changeEmpresaCliente,
        searchCliente, addCliente, changeEditCliente, editCliente, clearCliente
    }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ClienteVer)
