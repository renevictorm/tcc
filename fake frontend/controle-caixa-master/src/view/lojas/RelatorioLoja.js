import React, { Component } from "react";
import ReactDOM from "react-dom";
import store from "../../store/index.js";

class RelatorioLoja extends Component {
    componentDidMount() {
        const dom = ReactDOM.findDOMNode(this);

        dom.style.transition = "all 0.5s";
        dom.style.opacity = 0;

        setTimeout(() => dom.style.opacity = 1);

        window.$('select').material_select()
        
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
        })
    }

    render() {
        const usuarioAtual = store.getState().usuarioAtual;
        return <div className="row">
        <form className="col s12" >
        <h5>Acompanhe sua meta</h5>
        <h6 style={{paddingBottom: "20px"}}>(Redireciona para Cadastrar Semana caso mês não cadastrado)</h6>
        <div className="divider" />
        <div className="row">
            <div className="col s6">
                <h6>Selecione o mês</h6>
                <input type="text" className="datepicker" />
            </div>
        </div>
        <div className="row">
            <div className="input-field col s6">
            <select>
            <option value="1">Semana 1</option>
            <option value="2">Semana 2</option>
            <option value="3">Semana 3</option>
            <option value="4">Semana 4</option>
            </select>
            <label>Semana</label>
            </div>
        </div>
        </form>
        <button className="btn waves-effect waves-light col s2 offset-s4" type="submit" name="action">Salvar
        <i className="material-icons right">send</i>
        </button>
    </div>
    }
}

export default RelatorioLoja;