import React, { Component } from "react";
import ReactDOM from "react-dom";
import store from "../../store/index.js";

class ControleLoja extends Component {
    componentDidMount() {
        const dom = ReactDOM.findDOMNode(this);

        dom.style.transition = "all 0.5s";
        dom.style.opacity = 0;

        setTimeout(() => dom.style.opacity = 1);

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
            format: 'dddd, dd !de mmmm !de yyyy',
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
        const lojas = store.getState().lojaAtual;

        return <div className="row">
            <div className="col s12">
                <h5>Selecione uma data para ter acesso às informações</h5>
            </div>
            <div className="row">
            <div className="col s6">
                <h6>Selecione o mês</h6>
                <input type="text" className="datepicker" />
            </div>
        </div>
        </div>;
    }
}

export default ControleLoja;