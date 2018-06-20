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
        return <div className="socorro" style={{ paddingTop: "20px" }}>
            <h1>Novo Funcionário</h1>
            <br/>
        
            <div className="input-field">
                <select id="tipo">
                    <option value="" disabled selected>Tipo de usuário</option>
                    <option value="1">Super-admin</option>
                    <option value="2">Administrador</option>
                    <option value="3">Usuário</option>
                </select>
                <label for="tipo">Tipo de usuário</label>
            </div>

            <div className="input-field">
                <input id="name" type="text" />
                <label for="name">Nome completo</label>
            </div>

            <div className="input-field">
                <input id="matricula" type="text" />
                <label for="matricula">Matrícula</label>
            </div>

            <div className="input-field">
                <input id="cpf" type="text" />
                <label for="cpf">CPF</label>
            </div>

             <div className="input-field">
                <input id="identidade" type="text" />
                <label for="identidade">Identidade</label>
            </div>

            <div className="input-field">
                <input id="endereco" type="text" />
                <label for="endereco">Endereço</label>
            </div>

            <div className="input-field">
                <input id="dataNascimento" type="text" className="datepicker" />
                <label for="dataNascimento">Data de nascimento</label>
            </div>

            <div className="input-field">
                <input id="dataEntrada" type="text" className="datepicker" />
                <label for="dataEntrada">Data de entrada</label>
            </div>

              <div className="input-field">
                <input id="dataSaida" type="text" className="datepicker" />
                <label for="dataSaida">Data de saída</label>
            </div>

            <div className="input-field">
                <input id="email" type="text" />
                <label for="email">Email</label>
            </div>

             <div className="input-field">
                <input id="emailAlternative" type="text" />
                <label for="emailAlternative">Email alternativo</label>
            </div>
           
            <div className="input-field">
                <input id="cargo" type="text" />
                <label for="cargo">Cargo</label>
            </div>

            <div className="input-field">
                <select id="status">
                    <option value="" disabled selected>Status</option>
                    <option value = 'false' >Desligado</option>
                    <option value = 'true' >Vinculado</option>
                   
                </select>
                <label for="status">Status</label>
            </div>

            <div className="input-field">
                <select id="camisa">
                    <option value="" disabled selected>Tamanho da Camisa</option>
                    <option value="GG">GG</option>
                    <option value="G">G</option>
                    <option value="M">M</option>
                    <option value="P">P</option>
                    <option value="PP">PP</option>
                </select>
                <label for="camisa">Tamanho da camisa</label>
            </div>

             <div className="input-field">
                <input id="login" type="text" />
                <label for="login">Login</label>
            </div>

            <div className="input-field">
                <input id="senha" type="password" />
                <label for="senha">Senha</label>
            </div>

            <div className="input-field">
                <input id="senha_confirm" type="password" />
                <label for="senha_confirm">Repita a senha</label>
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