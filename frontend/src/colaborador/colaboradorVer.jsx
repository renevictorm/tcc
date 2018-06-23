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


    componentWillMount() {

        this.props.search()
    }
    keyHandler(e) {
        const { add, search, name, tipoUsuario, clear, matricula } = this.props
        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(name)
        } else if (e.key === 'Escape') {

        }
    }
    componentDidMount() {
        window.$('select').material_select();

        window.$('.datepicker').pickadate({
            monthsFull: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio',
                'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            weekdaysFull: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira',
                'Sexta-feira', 'Sábado'],
            weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
            weekdaysLetter: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
            labelMonthNext: 'Próximo mês',
            labelMonthPrev: 'Mês anterior',
            labelMonthSelect: 'Selecione um mês',
            labelYearSelect: 'Selecione um ano',
            format: 'd !de mmmm !de yyyy',
            formatSubmit: 'yyyy/mm',
            selectMonths: true,
            selectYears: 20,
            today: 'Hoje',
            clear: 'Limpar',
            close: 'Ok',
            closeOnSelect: false
        });
    }/* 
     
                

                <select id="tipo" defaultValue="0" onChange={this.getVALUE()}>
                    <option value="1" >Super-admin</option>
                    <option value="2">Administrador</option>
                    <option value="3">Usuário</option>

                </select>

                 <div>
                    <input type="radio" id='coco' name="gender" value="1" />
                    <label >Super-Admin</label>
                </div>
                <div>
                    <input type="radio" id='coco2' name="gender" value="2" />
                    <label >Admin</label>
                </div>
                <div>
                    <input type="radio" id='coco3' name="gender" value="3" />
                    <label >User</label>
                </div>

            
    */
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
    /*
 <h1> {this.props.name}</h1>
                <br />


                <div className="col s4" >
                    <ul className="center">
                        <font size='5'>MATRÍCULA:{this.props.matricula}</font>
                    </ul>
                </div>
                <div className="col s4" >
                    <ul className="center">
                        <font size='5'>CPF:{this.props.cpf}</font>
                    </ul>
                </div>
                <div className="col s4" >
                    <ul className="center">
                        <font size='5'> IDENTIDADE:{this.props.identidade}</font>
                    </ul>
                </div>
                <div className="col s6" >
                    <ul className="center">
                        <font size='5'>EMAIL:{this.props.email}</font>
                    </ul>
                </div>
                <div className="col s6" >
                    <ul className="center">
                        <font size='5'>EMAIL ALTERNATIVO:{this.props.emailAlternative}</font>
                    </ul>
                </div>
                <div className="col s12" >
                    <ul className="center">
                        <font size='5'> ENDEREÇO:{this.props.endereco}</font>
                    </ul>
                </div>

             

                <div className="col s4" >
                    <ul className="center">
                        <font size='5'> CARGO:{this.props.cargo}</font>
                    </ul>
                </div>


                <div className="col s4" >
                    <ul className="center">
                        <font size='5'> LOGIN:{this.props.login}</font>
                    </ul>
                </div>

                <div className="col s4" >
                    <ul className="center">
                        <font size='5'> DATA NASCIMENTO:{this.props.dataNascimento}</font>
                    </ul>
                </div>


                <div className="col s4" >
                    <ul className="center">
                        <font size='5'> DATA DE ENTRADA:{this.props.dataEntrada}</font>
                    </ul>
                </div>
                

                <div className="col s4" >
                    <ul className="center">
                        <font size='5'> DATA DE SAÍDA:{this.props.dataSaida}</font>
                    </ul>
                </div>


                <div className="col s4" >
                    <ul className="center">
                        <font size='5'> TAMANHO DA CAMISA:{this.props.camisa}</font>
                    </ul>
                </div>
                <div className="col s4" >
                    <ul className="center">
                        <font size='5'> STATUS:{this.props.status}</font>
                    </ul>
                </div>
            

            


    ============================================================================================================


        <div className="col s4" key={colaborador._id}>
                <div className="card teal lighten-1">
                    <div className="card-content white-text">
                        <a className="card-title center white-text" style={{ cursor: "pointer" }}>{colaborador.name}</a>

                        <ul className="center">
                            <font size='5'>{colaborador.cargo}</font>
                        </ul>
                    </div>
                    <div className="card-action teal darken-2">
                        <a href='#/colaboradore' className="waves-effect waves btn #1565c9 blue darken-3"
                            onClick={() => props.changeEdit(colaborador)}>
                            <i className="material-icons left">{"edit"}</i>

                        </a>
                        <a href='#/colaboradorver' className="waves-effect waves btn #1565c9 blue darken-3"
                            onClick={() => props.changeEdit(colaborador)}>
                            <i className="material-icons left">{"search"}</i>
                        </a>

                        <a className="center btn red darken-4" >
                            <i className="material-icons left">{"clear"}</i>
                        </a>

                    </div>
                </div>
            </div>             
    */
    render() {
        const { edit, add, search, name, tipoUsuario, matricula, email, emailAlternative, cpf, endereco, identidade, cargo,
            login, senha, dataNascimento, dataEntrada, dataSaida, camisa, status } = this.props
        return <div className="row" style={{ paddingTop: "20px" }}>

            <div className="col s4">
                <div className=" row teal lighten-1">
                    <div className=" row">
                        <div className="col s4">
                            <img className="responsive-imgr" src="https://instagram.fbhz2-1.fna.fbcdn.net/vp/970f06c2211709b380473535d4bad810/5BBB534A/t51.2885-15/e35/21149619_1720037108300122_2320621059671326720_n.jpg" />

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
                    <div className="card-action teal white-text center darken-2">
                        <ul >
                            <font size='5'><b>SITUAÇÃO: </b> {status}</font><br />
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col s8">
                <div className=" row teal lighten-1">
                    <div className=" row">
                        <div className="card-content white-text col s6">
                            <ul >
                                <font size='6'>Dados:</font><br />

                                <font size='4'><b>EMAIL ALTERNATIVO: </b>{emailAlternative}</font><br />

                                <font size='4'><b> ENTRADA: </b>{dataEntrada}</font><br />

                                <font size='4'><b>SAÍDA: </b>{dataSaida} </font>
                            </ul>
                        </div>
                        <div className="card-content white-text col s6">
                            <ul ><br/>
                                <font size='4'><b>CPF: </b>{cpf}</font><br />

                                <font size='4'><b>IDENTIDADE: </b>{identidade}</font><br />

                                <font size='4'><b>MATRÍCULA: </b>{matricula}</font><br />

                                <font size='4'><b>NASCIMENTO: </b>{dataNascimento}</font><br />



                            </ul>
                        </div>
                        
                    </div>
                    <div className="card-content center white-text darken-2">
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
