import React, { Component } from "react"
import { connect } from 'react-redux'
import Grid from '../template/grid'
import { bindActionCreators } from 'redux'
import {
    edit, add, changeName, changeTipoUsuario, search, clear, changeMatricula, changeEmail, changeEmailAlternative,
    changeCpf, changeEndereco, changeIdentidade, changeCargo, changeLogin, changeSenha, changeDataNascimento,
    changeDataEntrada, changeDataSaida, changeCamisa, changeStatus
} from './colaboradorActions'



class ColaboradorVer extends Component {
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
        window.history.replaceState('Object', 'bemvindo', '#/colaboradorpp')
       
        this.props.search()
    }
    keyHandler(e) {
        const { add, search, name, tipoUsuario, clear, matricula } = this.props
        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(name)
        } else if (e.key === 'Escape') {
            alert('aaa')//window.location.href = '#/bemvindo';
        }
    }

    getVALUE() {
        const { isEdited, colaborador, edit, add, search, name, tipoUsuario, matricula, email, emailAlternative, cpf, endereco, identidade, cargo,
            login, senha, dataNascimento, dataEntrada, dataSaida, camisa, status } = this.props
        if (isNaN(this.props.tipoUsuario) || (this.props.tipoUsuario) < 1 || (this.props.tipoUsuario) > 3) {
            alert("O Campo 'Tipo de Usuário' deve ser um número de 1 a 3: \n 1: Super admin \n 2: Admin \n 3: Usuário ")
        } else {

            edit(isEdited, colaborador, name, tipoUsuario, matricula, cpf, email, emailAlternative, endereco, identidade, cargo,
                login, senha, dataNascimento, dataEntrada, dataSaida, camisa, status)
        }

    }

    render() {
        const { edit, add, search, name, tipoUsuario, matricula, email, emailAlternative, cpf, endereco, identidade, cargo,
            login, senha, dataNascimento, dataEntrada, dataSaida, camisa, status } = this.props
        return <div onKeyUp={this.keyHandler} className="row" style={{ paddingTop: "20px" }}>

            <div className="col s4">
                <div className=" row blue ">
                    <div className=" row">
                        <div className="col s4">
                            <img className="responsive-imgr" src="https://instagram.fbhz1-1.fna.fbcdn.net/vp/6177b1f18eb50104dff81120a39dd611/5BDE2CE9/t51.2885-19/s150x150/23417012_126449281383186_8806784900909760512_n.jpg" />

                        </div>
                        <div className="card-content white-text col s8">
                            <ul >
                                <font size='5'><b>{name}</b></font><br />

                                <font size='4'><b>{cargo}</b></font><br />

                                <font size='4'><b>{email}</b></font><br />

                                <font size='4'><b>32 3343-1114</b></font>
                            </ul>
                        </div>
                    </div>
                    <div className="card-action blue white-text center darken-3">
                        <ul >
                            <font size='5'><b>SITUAÇÃO: </b> {status}</font><br />
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col s8">
                <div className=" row blue ">
                    <div className=" row">
                        <div className="card-content white-text col s6">
                            <ul >
                                <font size='6'>Dados:</font><br />

                                <font size='4'><b>EMAIL ALTERNATIVO: </b>{emailAlternative}</font><br />

                                <font size='4'><b> ENTRADA: </b>{dataEntrada.substring(0, 10)}</font><br />

                                <font size='4'><b>SAÍDA: </b>{dataSaida} </font><br />

                                <font size='4'><b>TAMANHO DA CAMISA: </b>{camisa} </font>
                            </ul>
                        </div>
                        <div className="card-content white-text col s6">
                            <ul ><br />
                                <font size='4'><b>CPF: </b>{cpf}</font><br />

                                <font size='4'><b>IDENTIDADE: </b>{identidade}</font><br />

                                <font size='4'><b>MATRÍCULA: </b>{matricula}</font><br />

                                <font size='4'><b>NASCIMENTO: </b>{dataNascimento.substring(0, 10)}</font><br />



                            </ul>
                        </div>

                    </div>
                    <div className="card-content center white-text blue darken-2">
                        <ul >
                            <font size='4'><b> ENDEREÇO: </b> {endereco}</font><br />
                        </ul>
                    </div>

                </div>

            </div>




        </div>

    }
}

const mapStateToProps = state => ({
    name: state.colaborador.name, tipoUsuario: state.colaborador.tipoUsuario,
    matricula: state.colaborador.matricula, email: state.colaborador.email,
    emailAlternative: state.colaborador.emailAlternative, cpf: state.colaborador.cpf,
    endereco: state.colaborador.endereco, identidade: state.colaborador.identidade,
    cargo: state.colaborador.cargo, login: state.colaborador.login,
    senha: state.colaborador.senha, dataNascimento: state.colaborador.dataNascimento,
    dataEntrada: state.colaborador.dataEntrada, dataSaida: state.colaborador.dataSaida,
    camisa: state.colaborador.camisa, status: state.colaborador.status, isEdited: state.colaborador.isEdited
})
const mapDispatchToProps = dispatch =>
    bindActionCreators({
        edit, add, changeName, search, clear, changeTipoUsuario, changeMatricula,
        changeEmail, changeEmailAlternative, changeCpf, changeEndereco, changeIdentidade, changeCargo,
        changeLogin, changeSenha, changeDataNascimento, changeDataEntrada, changeDataSaida, changeCamisa,
        changeStatus
    }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ColaboradorVer)
