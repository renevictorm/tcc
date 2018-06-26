import React, { Component } from "react"
import { connect } from 'react-redux'
import Grid from '../template/grid'
import { bindActionCreators } from 'redux'


class NovoProjeto extends Component {
    constructor(props) {
        super(props)
       // this.keyHandler = this.keyHandler.bind(this)
        //this.getVALUE = this.getVALUE.bind(this)
       
    }


    componentWillMount() {
        //this.props.clear()
        //this.props.search()
    }
      /*
    keyHandler(e) {
        const { add, search, name, tipoUsuario, clear, matricula } = this.props
        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(name)
        } else if (e.key === 'Escape') {
            clear()
        }
    }

    getVALUE() {
        const { } = this.props
        if (isNaN(this.props.tipoUsuario) || (this.props.tipoUsuario) < 1 || (this.props.tipoUsuario) > 3) {
            alert("O Campo 'Tipo de Usuário' deve ser um número de 1 a 3: \n 1: Super admin \n 2: Admin \n 3: Usuário ")
        } else {
            add(name, tipoUsuario, matricula, cpf, email, emailAlternative, endereco, identidade, cargo,
                login, senha, dataNascimento, dataEntrada, dataSaida, camisa, status)
        }

    }
  
       const { add, search, name, tipoUsuario, matricula, email, emailAlternative, cpf, endereco, identidade, cargo,
            login, senha, dataNascimento, dataEntrada, dataSaida, camisa, status } = this.props              
    */
    render() {
       
        return <div style={{ paddingTop: "20px" }}>
            <Grid cols='12 9 10'>
                <div className="socorro">
                    <form className="col s10  " >
                        <h1>Novo Projeto</h1>
                        <div className="divider" />
                        <div className="input-field">
                            <input placeholder="" id="Nome" type="text" className="validate" />
                            <label >Nome</label>

                        </div>
                        <div className="input-field">
                            <input placeholder="" id="tempo_estimado" type="text" className="validate" />
                            <label >Tipo de Projeto</label>

                        </div>
                        <div className="input-field">
                            <input placeholder="" id="Nome_Cliente" type="text" className="validate" />
                            <label >Nome do Cliente</label>

                        </div>
                        <div className="input-field">
                            <input placeholder="" id="CPF_CNPJ_Clinete" type="text" className="validate" />
                            <label >CPF ou CNPJ do Cliente</label>

                        </div>
                        <div className="input-field">
                            <input placeholder="" id="Endereco_Cliente" type="text" className="validate" />
                            <label >Endereço do Cliente</label>

                        </div>
                        <br />
                        <br />

                        <div className="row">
                            <div className="col s4 offset-s4">
                                <ul id="slide-in" >

                                    

                                </ul>

                            </div>
                        </div>
                    </form>
                </div>
            </Grid>

        </div>

    }
}

const mapStateToProps = state => ({     })
const mapDispatchToProps = dispatch =>
    bindActionCreators({    }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(NovoProjeto)
