import React, { Component } from "react";
import ReactDOM from "react-dom";
import store from "../../store/index.js";
import NovaRetirada from "./NovaRetirada.js"
import NovaAnotacao from "./NovaAnotacao.js"
import NovaVendaCartao from "./NovaVendaCartao.js"
import NovoDeposito from "./NovoDeposito.js"
import NovoFechamentoCaixa from "./NovoFechamentoCaixa.js"

class NovosDadosLoja extends Component {
    componentDidMount() {
        window.$('ul.tabs').tabs();

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
        return <div className="row">
            <div className="col s12">
                <h5>Selecione uma data para cadastrar as informações</h5>
            </div>
            <div className="row">
                <div className="col s6">
                    <input type="text" className="datepicker" placeholder="Data" />
                </div>
            </div>
            <div className="row">
                <div className="col s12">
                    <ul id="tabs-funcionario" className="tabs black-text">
                        <li className="tab col s2"><a className="active" href="#retiradas">Retiradas</a></li>
                        <li className="tab col s2"><a href="#anotacoes">Anotações</a></li>
                        <li className="tab col s2"><a className="active" href="#vendas-cartao">Vendas c/ cartão</a></li>
                        <li className="tab col s3"><a href="#fechamento-caixa">Fechamento de caixa</a></li>
                        <li className="tab col s2"><a className="active" href="#depositos">Depósito</a></li>
                    </ul>
                    <div id="retiradas" className="col s12">
                        <NovaRetirada />
                    </div>
                    <div id="anotacoes" className="col s12">
                        <NovaAnotacao />
                    </div>
                    <div id="vendas-cartao" className="col s12">
                        <NovaVendaCartao />
                    </div>
                    <div id="fechamento-caixa" className="col s12">
                        <NovoFechamentoCaixa />
                    </div>
                    <div id="depositos" className="col s12">
                        <NovoDeposito />
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default NovosDadosLoja;