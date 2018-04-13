import React, { Component } from "react"

class NovoFuncionario extends Component {
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
    }

    render() {
        return <div className="col s6" style={{ paddingTop: "20px" }}>
            <div className="input-field">
                <select id="tipo-usuario">
                    <option value="" disabled selected>Tipo de usuário</option>
                    <option value="1">Super-admin</option>
                    <option value="2">Administrador</option>
                    <option value="3">Usuário</option>
                </select>
                <label for="tipo-usuario">Tipo de usuário</label>
            </div>

            <div className="input-field">
                <input id="nome_completo" type="text" />
                <label for="nome_completo">Nome completo</label>
            </div>

            <div className="input-field">
                <input id="cpf" type="text" />
                <label for="cpf">CPF</label>
            </div>

            <div className="input-field">
                <input id="endereco" type="text" />
                <label for="endereco">Endereço</label>
            </div>

            <div className="input-field">
                <input id="endereco" type="text" />
                <label for="endereco">Telefone</label>
            </div>

            <div className="input-field">
                <input id="data-nasc" type="text" className="datepicker" />
                <label for="data-nasc">Data de nascimento</label>
            </div>

            <div className="input-field">
                <input id="data-contrato" type="text" className="datepicker" />
                <label for="data-contrato">Data de contrato</label>
            </div>

            <div className="input-field">
                <input id="email" type="text" />
                <label for="email">Email</label>
            </div>

            <div className="input-field">
                <input id="pass" type="password" />
                <label for="pass">Senha</label>
            </div>

            <div className="input-field">
                <input id="pass_confirm" type="password" />
                <label for="pass_confirm">Repita a senha</label>
            </div>

            <div className="row">
                <div className="col s4 offset-s4">
                    <a className="waves-effect waves-light btn">
                        Salvar
                        <i className="material-icons right">send</i>
                    </a>
                </div>
            </div>
        </div>;
    }
}

export default NovoFuncionario