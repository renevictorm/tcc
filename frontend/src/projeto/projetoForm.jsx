import React, { Component } from "react"
import { connect } from 'react-redux'
import Grid from '../template/grid'
import { bindActionCreators } from 'redux'
import {
    addProjeto, changeNameProjeto, changeCodigoProjeto, searchProjeto, clearProjeto, changeInicioProjeto, changeSituacaoProjeto, changeFimProjeto,
    changeFimEsperadoProjeto, changeTipoProjeto, changePrecoRealProjeto, changePrecoEsperadoProjeto, changeDescricaoProjeto, changeGastosProjeto
} from './projetoActions'

class NovoProjeto extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
        this.getVALUE = this.getVALUE.bind(this)

    }


    componentWillMount() {
        this.props.clearProjeto()
        this.props.searchProjeto()
    }

    keyHandler(e) {
        const { addProjeto, nameProjeto, codigoProjeto, inicioProjeto, situacaoProjeto, fimProjeto, fimEsperadoProjeto, tipoProjeto, precoRealProjeto, precoEsperadoProjeto, descricaoProjeto, gastosProjeto } = this.props
        if (e.key === 'Enter') {
            addProjeto(nameProjeto, codigoProjeto, inicioProjeto, situacaoProjeto, fimProjeto, fimEsperadoProjeto, tipoProjeto, precoRealProjeto, precoEsperadoProjeto, descricaoProjeto, gastosProjeto)
        }
    }

    getVALUE() {
        const { addProjeto, nameProjeto, codigoProjeto, inicioProjeto, situacaoProjeto, fimProjeto, fimEsperadoProjeto, tipoProjeto, precoRealProjeto, precoEsperadoProjeto, descricaoProjeto, gastosProjeto } = this.props

        addProjeto(nameProjeto, codigoProjeto, inicioProjeto, situacaoProjeto, fimProjeto, fimEsperadoProjeto, tipoProjeto, precoRealProjeto, precoEsperadoProjeto, descricaoProjeto, gastosProjeto)
    }
    /*
        const { add, search, name, tipoUsuario, matricula, email, emailAlternative, cpf, endereco, identidade, cargo,
             login, senha, dataNascimento, dataEntrada, dataSaida, camisa, status } = this.props              
     */
    render() {
        const { addProjeto, nameProjeto, codigoProjeto, inicioProjeto, situacaoProjeto, fimProjeto, fimEsperadoProjeto, tipoProjeto, precoRealProjeto, precoEsperadoProjeto, descricaoProjeto, gastosProjeto } = this.props

        return <div style={{ paddingTop: "20px" }}>

            <div className="socorro row">

                <h1>Novo Projeto</h1>

                <br />
                <div className="card col s6 blue lighten-5 ">
                    <div className="left"><b>Nome:</b></div>
                    <div className="input-field">
                        <input id="name" type="text"
                            placeholder='Nome'

                            onChange={this.props.changeNameProjeto}

                            value={this.props.nameProjeto} >
                        </input>

                    </div>
                </div>
                <div className="card col s6 blue lighten-5">

                    <div className="left"><b>Código:</b></div>
                    <div className="input-field">
                        <input id="codigo" type="text"
                            placeholder="Código"
                            onChange={this.props.changeCodigoProjeto}

                            value={this.props.codigoProjeto} >
                        </input>


                    </div>
                </div>
                <br/><br/><br/><br/><br/><br/><br/>

                <div className="left"><b>Descrição:</b></div>
                <div className="input-field ">



                    <textarea id="descricao" type="text" cols='50' rows='10'
                        placeholder="Descrição"
                        onChange={this.props.changeDescricaoProjeto}

                        value={this.props.descricaoProjeto} >
                    </textarea>

                </div>
                <br/><br/>
                <div className="row">
                    <div className="col s4 offset-s4">
                        <ul id="slide-in" >
                            <a className="waves-effect blue lighten-1  waves-light btn"
                                onClick={() => [

                                    this.getVALUE()

                                ]

                                }>
                                <b >Salvar</b>
                                        <i className="material-icons orange-text text-lighten-1 right">send</i>
                            </a>
                        </ul>

                    </div>
                </div>

            </div>


        </div>

    }
}

const mapStateToProps = state => ({
    nameProjeto: state.projeto.nameProjeto, codigoProjeto: state.projeto.codigoProjeto, inicioProjeto: state.projeto.inicioProjeto, situacaoProjeto: state.projeto.situacaoProjeto,
    fimProjeto: state.projeto.fimProjeto, fimEsperadoProjeto: state.projeto.fimEsperadoProjeto, tipoProjeto: state.projeto.tipoProjeto, precoRealProjeto: state.projeto.precoRealProjeto,
    precoEsperadoProjeto: state.projeto.precoEsperadoProjeto, descricaoProjeto: state.projeto.descricaoProjeto, gastosProjeto: state.projeto.gastosProjeto
})
const mapDispatchToProps = dispatch =>
    bindActionCreators({
        addProjeto, changeNameProjeto, changeCodigoProjeto, searchProjeto, clearProjeto, changeInicioProjeto, changeSituacaoProjeto, changeFimProjeto,
        changeFimEsperadoProjeto, changeTipoProjeto, changePrecoRealProjeto, changePrecoEsperadoProjeto, changeDescricaoProjeto, changeGastosProjeto
    }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(NovoProjeto)
