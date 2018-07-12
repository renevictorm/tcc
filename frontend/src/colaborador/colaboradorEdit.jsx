import React, { Component } from "react"
import { connect } from 'react-redux'
import Grid from '../template/grid'
import { bindActionCreators } from 'redux'
import {
    edit, add, changeName, changeTipoUsuario, search, clear, changeMatricula, changeEmail, changeEmailAlternative,
    changeCpf, changeEndereco, changeIdentidade, changeCargo, changeLogin, changeSenha, changeDataNascimento,
    changeDataEntrada, changeDataSaida, changeCamisa, changeStatus
} from './colaboradorActions'

class ColaboradorEdit extends Component {
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
        const { isEdited,colaborador, edit, add, search, name, tipoUsuario, matricula, email, emailAlternative, cpf, endereco, identidade, cargo,
            login, senha, dataNascimento, dataEntrada, dataSaida, camisa, status } = this.props
        if (isNaN(this.props.tipoUsuario) || (this.props.tipoUsuario) < 1 || (this.props.tipoUsuario) > 3) {
            alert("O Campo 'Tipo de Usuário' deve ser um número de 1 a 3: \n 1: Super admin \n 2: Admin \n 3: Usuário ")
        } else {
            
            edit(isEdited, colaborador, name, tipoUsuario, matricula, cpf, email, emailAlternative, endereco, identidade, cargo,
                login, senha, dataNascimento, dataEntrada, dataSaida, camisa, status)
        }

    }
    /*
                    
    */
    render() {
        const {edit, add, search, name, tipoUsuario, matricula, email, emailAlternative, cpf, endereco, identidade, cargo,
            login, senha, dataNascimento, dataEntrada, dataSaida, camisa, status } = this.props
        return <div style={{ paddingTop: "20px" }}>
            <Grid cols='12 9 10'>
                <h1>Editar Funcionário</h1>
                <div className="socorro row">
                <div className="card col s12 blue lighten-5 ">
                    <div className="center"><b>Tipo de Usuário:</b></div>
                    <div className="center">||1-Super Admin || 2-Admin || 3-User||</div>
                    <div className="input-field" >


                        <input id="tipo" type="range" min="1" max="3"
                            placeholder='Tipo de Usuário'

                            onChange={this.props.changeTipoUsuario}
                            onKeyUp={this.keyHandler}
                            value={this.props.tipoUsuario}                >
                        </input>

                    </div></div>

                    <div className="card col s6  ">
                    <div className="center"><b>Nome:</b></div>
                    <div className="input-field">
                        <input id="name" type="text"
                            placeholder='Nome'

                            onChange={this.props.changeName}
                            onKeyUp={this.keyHandler}
                            value={this.props.name} >
                        </input>

                    </div></div>

                    <div className="card col s6  ">
                    <div className="center"><b>Matrícula:</b></div>
                    <div className="input-field">
                        <input id="matricula" type="text"
                            placeholder="Matrícula"
                            onChange={this.props.changeMatricula}
                            onKeyUp={this.keyHandler}
                            value={this.props.matricula} >
                        </input>


                    </div></div>

                  <div className="card col s6 blue lighten-5 ">
                    <div className="center"><b>CPF:</b></div>
                    <div className="input-field">
                        <input id="cpf" type="text"
                            placeholder="CPF"
                            onChange={this.props.changeCpf}
                            onKeyUp={this.keyHandler}
                            value={this.props.cpf} >
                        </input>

                    </div></div>

                    <div className="card col s6 blue lighten-5 ">
                    <div className="center"><b>Email:</b></div>
                    <div className="input-field">
                        <input id="email" type="text"
                            placeholder="EMAIL"
                            onChange={this.props.changeEmail}
                            onKeyUp={this.keyHandler}
                            value={this.props.email}  >
                        </input>
                    </div></div>

                    <div className="card col s6  ">
                    <div className="center"><b>Email Alternativo:</b></div>
                    <div className="input-field">
                        <input id="emailAlternative" type="text"
                            placeholder="EMAIL ALTERNATIVO"
                            onChange={this.props.changeEmailAlternative}
                            onKeyUp={this.keyHandler}
                            value={this.props.emailAlternative} >
                        </input>
                    </div></div>

                   

                   <div className="card col s6  ">
                    <div className="center"><b>Identidade:</b></div>
                    <div className="input-field">
                        <input id="identidade" type="text"
                            placeholder="IDENTIDADE"
                            onChange={this.props.changeIdentidade}
                            onKeyUp={this.keyHandler}
                            value={this.props.identidade}>
                        </input>
                    </div></div>

                   <div className="card col s6 blue lighten-5 ">
                    <div className="center"><b>Cargo:</b></div>
                    <div className="input-field">
                        <input id="cargo" type="text"
                            placeholder="CARGO"
                            onChange={this.props.changeCargo}
                            onKeyUp={this.keyHandler}
                            value={this.props.cargo}>
                        </input>
                    </div></div>

                   <div className="card col s6 blue lighten-5 ">
                    <div className="center"><b>Login:</b></div>
                    <div className="input-field">
                        <input id="login" type="text"
                            placeholder="LOGIN"
                            onChange={this.props.changeLogin}
                            onKeyUp={this.keyHandler}
                            value={this.props.login}>
                        </input>
                    </div></div>

                    <div className="card col s6  ">
                    <div className="center"><b>Senha:</b></div>
                    <div className="input-field">
                        <input id="senha" type="password"
                            placeholder="SENHA"
                            onChange={this.props.changeSenha}
                            onKeyUp={this.keyHandler}
                            value={this.props.senha}>
                        </input>
                    </div></div>

                    <div className="card col s6  ">
                    <div className="center"><b>Data de Nascimento:</b></div>
                    <div className="input-field">
                        
                        <input id="dataNascimento" type="Date"
                            placeholder="DATA DE NASCIMENTO"
                            onChange={this.props.changeDataNascimento}
                            onKeyUp={this.keyHandler}
                            value={this.props.dataNascimento}>
                        </input>
                    </div></div>

                   <div className="card col s6 blue lighten-5 ">
                    <div className="center"><b>Data de Entrada:</b></div>
                    <div className="input-field">
                        
                        <input id="dataEntrada" type="Date"
                            placeholder="DATA DE ENTRADA"
                            onChange={this.props.changeDataEntrada}
                            onKeyUp={this.keyHandler}
                            value={this.props.dataEntrada}>
                        </input>

                    </div></div>

                  <div className="card col s6 blue lighten-5 ">
                    <div className="center"><b>Data de Saída:</b></div>
                    <div className="input-field">
                       
                        <input id="dataSaida" type="Date"
                            placeholder="DATA DE SAÍDA"
                            onChange={this.props.changeDataSaida}
                            onKeyUp={this.keyHandler}
                            value={this.props.dataSaida}>
                        </input>

                    </div></div>

                   <div className="card col s6  ">
                    <div className="center"><b>Tamanho da Camisa:</b></div>
                    <div className="input-field">
                        <input id="camisa" type="text"
                            placeholder="TAMANHO DA CAMISA"
                            onChange={this.props.changeCamisa}
                            onKeyUp={this.keyHandler}
                            value={this.props.camisa}>
                        </input>

                    </div></div>

                   <div className="card col s6  ">
                    <div className="center"><b>Status</b></div>
                    <div className="input-field">
                        <input id="status" type="text"
                            placeholder="STATUS"
                            onChange={this.props.changeStatus}
                            onKeyUp={this.keyHandler}
                            value={this.props.status}>
                        </input>

                    </div></div>

                    <div className="card col s12 blue lighten-5 ">
                    <div className="center"><b>Endereço:</b></div>
                    <div className="input-field">
                        <input id="endereco" type="text"
                            placeholder="ENDEREÇO"
                            onChange={this.props.changeEndereco}
                            onKeyUp={this.keyHandler}
                            value={this.props.endereco} >
                        </input>
                    </div></div>


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
export default connect(mapStateToProps, mapDispatchToProps)(ColaboradorEdit)
