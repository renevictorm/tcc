import React, { Component } from "react"
import { connect } from 'react-redux'
import Grid from '../template/grid'
import { bindActionCreators } from 'redux'
import {
    edit, search, clear, add, changeName, changeObservacao
} from './competenciaActions'

class CompetenciaEdit extends Component {
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
        const { isEdited, competencia, edit, add, search, name, observacao } = this.props
        if (isNaN(this.props.tipoUsuario) || (this.props.tipoUsuario) < 1 || (this.props.tipoUsuario) > 3) {
            alert("O Campo 'Tipo de Usuário' deve ser um número de 1 a 3: \n 1: Super admin \n 2: Admin \n 3: Usuário ")
        } else {

           
        }

    }
    /*
                    
    */
    render() {
        const { competencia, isEdited, edit, add, search, name, observacao } = this.props
        return <div className="socorro2" style={{ paddingTop: "20px" }}>
            <Grid cols='12 9 10'>
                <h1>Editar Competência</h1>
                <br />


                <div className="input-field">
                    <input id="name" type="text"
                        placeholder='Nome'

                        onChange={this.props.changeName}
                        onKeyUp={this.keyHandler}
                        value={this.props.name} >
                    </input>

                </div>

                <div className="input-field" >


                    <input id="tipo" type="text"
                        placeholder='Observação'

                        onChange={this.props.changeObservacao}
                        onKeyUp={this.keyHandler}
                        value={this.props.observacao}                >
                    </input>

                </div>

                
                <div className="row">
                    <div className="col s4 offset-s4">
                        <a href='#/competencia' className="waves-effect waves-light btn"
                            onClick={() => [

                                edit(isEdited, competencia, name, observacao)

                            ]

                            }>
                            Salvar
                        <i className="material-icons right">send</i>
                        </a>
                    </div>
                </div>

            </Grid>
        </div>

    }
}

const mapStateToProps = state => ({
    name: state.competencia.name, observacao: state.competencia.observacao,isEdited: state.competencia.isEdited})
const mapDispatchToProps = dispatch =>
    bindActionCreators({edit, add, changeName, search, clear, changeObservacao}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(CompetenciaEdit)
