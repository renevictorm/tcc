import React, { Component } from "react";
import ReactDOM from "react-dom";
import store from "../../store/index.js";

class CadastrarSemana extends Component {
    componentDidMount(){
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
            format: 'mmmm !de yyyy',
            formatSubmit: 'yyyy/mm/dd',
            selectMonths: true, 
            selectYears: 20,
            today: 'Hoje',
            clear: 'Limpar',
            close: 'Ok',
            closeOnSelect: false
          });
    }
    render() {
        return <div className="row">
        <form className="col s12" >
        <h5>Divida as semanas do mês</h5>
        <div className="divider" />
        <div className="row">
            <div className="col s6">
                <h6>Selecione o mês</h6>
                <input type="text" className="datepicker" />
            </div>
        </div>
        <div className="row">
            <div className="col s6">
                <h6>Primeira Semana</h6>
                <div className="input-field col s6">
                <input placeholder="" id="semana1_ini" type="number" min="1" max="31" className="validate" />
                <label for="endereco">Inicio</label>
                </div>
                <div className="input-field col s6">
                <input placeholder="" id="semana1_fim" type="number" min="1" max="31" className="validate" />
                <label for="endereco">Fim</label>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col s6">
                <h6>Segunda Semana</h6>
                <div className="input-field col s6">
                <input placeholder="" id="semana1_ini" type="number" min="1" max="31" className="validate" />
                <label for="endereco">Inicio</label>
                </div>
                <div className="input-field col s6">
                <input placeholder="" id="semana1_fim" type="number" min="1" max="31" className="validate" />
                <label for="endereco">Fim</label>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col s6">
                <h6>Terceira Semana</h6>
                <div className="input-field col s6">
                <input placeholder="" id="semana1_ini" type="number" min="1" max="31" className="validate" />
                <label for="endereco">Inicio</label>
                </div>
                <div className="input-field col s6">
                <input placeholder="" id="semana1_fim" type="number" min="1" max="31" className="validate" />
                <label for="endereco">Fim</label>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col s6">
                <h6>Quarta Semana</h6>
                <div className="input-field col s6">
                <input placeholder="" id="semana1_ini" type="number" min="1" max="31" className="validate" />
                <label for="endereco">Inicio</label>
                </div>
                <div className="input-field col s6">
                <input placeholder="" id="semana1_fim" type="number" min="1" max="31" className="validate" />
                <label for="endereco">Fim</label>
                </div>
            </div>
        </div>
        </form>
        <button className="btn waves-effect waves-light col s2 offset-s4" type="submit" name="action">Salvar
        <i className="material-icons right">send</i>
        </button>
    </div>
    }
}

export default CadastrarSemana