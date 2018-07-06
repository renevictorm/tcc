import React, { Component } from "react"
import { connect } from 'react-redux'
import Grid from '../template/grid'
import { bindActionCreators } from 'redux'
import {
    editProjeto, addProjeto, changeNameProjeto, changeCodigoProjeto, searchProjeto, clearProjeto, changeInicioProjeto, changeSituacaoProjeto, changeFimProjeto,
    changeFimEsperadoProjeto, changeTipoProjeto, changePrecoRealProjeto, changePrecoEsperadoProjeto, changeDescricaoProjeto, changeGastosProjeto
} from './projetoActions'

class ProjetoEdit extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
        this.getVALUE = this.getVALUE.bind(this)

    }


    componentWillMount() {
        //this.props.clearProjeto()
        //this.props.searchProjeto()
    }

    keyHandler(e) {
        const { isEditedProjeto, projeto, addProjeto, nameProjeto, codigoProjeto, inicioProjeto, situacaoProjeto, fimProjeto, fimEsperadoProjeto, tipoProjeto, precoRealProjeto, precoEsperadoProjeto, descricaoProjeto, gastosProjeto } = this.props
        if (e.key === 'Enter') {
            editProjeto(isEditedProjeto, projeto, nameProjeto, codigoProjeto, inicioProjeto, situacaoProjeto, fimProjeto, fimEsperadoProjeto, tipoProjeto, precoRealProjeto, precoEsperadoProjeto, descricaoProjeto, gastosProjeto)
        }
    }

    getVALUE() {
        const { editProjeto, isEditedProjeto, projeto, addProjeto, nameProjeto, codigoProjeto, inicioProjeto, situacaoProjeto, fimProjeto, fimEsperadoProjeto, tipoProjeto, precoRealProjeto, precoEsperadoProjeto, descricaoProjeto, gastosProjeto } = this.props

        editProjeto(isEditedProjeto, projeto, nameProjeto, codigoProjeto, inicioProjeto, situacaoProjeto, fimProjeto, fimEsperadoProjeto, tipoProjeto, precoRealProjeto, precoEsperadoProjeto, descricaoProjeto, gastosProjeto)
    }
    /*
        const { add, search, name, tipoUsuario, matricula, email, emailAlternative, cpf, endereco, identidade, cargo,
             login, senha, dataNascimento, dataEntrada, dataSaida, camisa, status } = this.props              
     */
    render() {
        const { isEditProjeto, addProjeto, nameProjeto, codigoProjeto, inicioProjeto, situacaoProjeto, fimProjeto, fimEsperadoProjeto, tipoProjeto, precoRealProjeto, precoEsperadoProjeto, descricaoProjeto, gastosProjeto } = this.props

        return <div style={{ paddingTop: "20px" }}>

            <div className="socorro row">

                <h1>Editar Projeto</h1>

                <br />
                <div className="card col s6 ">
                    <div className="left"><b>Nome:</b></div>
                    <div className="input-field">
                        <input id="name" type="text"
                            placeholder='Nome'

                            onChange={this.props.changeNameProjeto}

                            value={this.props.nameProjeto} >
                        </input>

                    </div>
                </div>
                <div className="card col s6">

                    <div className="left"><b>Código:</b></div>
                    <div className="input-field">
                        <input id="codigo" type="text"
                            placeholder="Código"
                            onChange={this.props.changeCodigoProjeto}

                            value={this.props.codigoProjeto} >
                        </input>


                    </div>
                </div>

                <div className=" card col s6">
                    <div className="center"><b>Data de Inicio:</b></div>
                    <div className="input-field">

                        <input id="datainicio" type="Date"
                            placeholder="DATA DO INICIO"
                            onChange={this.props.changeInicioProjeto}
                            onKeyUp={this.keyHandler}
                            value={this.props.inicioProjeto}>
                        </input>
                    </div>
                </div>

                <div className="card col s6">
                    <div className="center"><b>Data do Fim:</b></div>
                    <div className="input-field">

                        <input id="dataNascimento" type="Date"
                            placeholder="DATA DO FIM"
                            onChange={this.props.changeFimProjeto}
                            onKeyUp={this.keyHandler}
                            value={this.props.fimProjeto}>
                        </input>
                    </div>
                </div>
                <br />
                <div className=" card col s12">
                    <div className="center"><b>Data prevista do fim:</b></div>
                    <div className="input-field">

                        <input id="datafimesperado" type="Date"
                            placeholder="DATA ESPERADA DO FIM"
                            onChange={this.props.changeFimEsperadoProjeto}
                            onKeyUp={this.keyHandler}
                            value={this.props.fimEsperadoProjeto}>
                        </input>
                    </div>
                </div>
                <br /><br /><br /><br /><br /><br /><br />

                <div className="left"><b>Descrição:</b></div>
                <div className="input-field col s12">



                    <textarea id="descricao" type="text" cols='50' rows='10'
                        placeholder="Descrição"
                        onChange={this.props.changeDescricaoProjeto}

                        value={this.props.descricaoProjeto} >
                    </textarea>

                </div>
                <br /><br />
                <div className="row">
                    <div className="col s4 offset-s4">
                        <ul id="slide-in" >
                            <a  className="waves-effect blue darken-1  waves-light btn"
                                onClick={() => [

                                    this.getVALUE()

                                ]

                                }>
                                <b >Salvar</b>
                                <i className="material-icons orange-text text-lighten-1 right">send</i>
                            </a>
                            <br/><br/><br/>
                            <a href="#/projetover" className="waves-effect blue darken-1  waves-light btn"
                               >
                                <b >Voltar</b>
                                <i className="material-icons orange-text text-lighten-1 right">redo</i>
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
    precoEsperadoProjeto: state.projeto.precoEsperadoProjeto, descricaoProjeto: state.projeto.descricaoProjeto, gastosProjeto: state.projeto.gastosProjeto, isEditedProjeto: state.projeto.isEditedProjeto
})
const mapDispatchToProps = dispatch =>
    bindActionCreators({
        editProjeto, addProjeto, changeNameProjeto, changeCodigoProjeto, searchProjeto, clearProjeto, changeInicioProjeto, changeSituacaoProjeto, changeFimProjeto,
        changeFimEsperadoProjeto, changeTipoProjeto, changePrecoRealProjeto, changePrecoEsperadoProjeto, changeDescricaoProjeto, changeGastosProjeto
    }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ProjetoEdit)
