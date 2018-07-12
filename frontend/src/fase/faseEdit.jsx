import React, { Component } from "react"
import { connect } from 'react-redux'
import Grid from '../template/grid'
import { bindActionCreators } from 'redux'

import {
    changeNameFase, changeIdProjetoFase, changeInicioFase, changeFimFase, changeFimEsperadoFase,
    changeDescricaoFase, searchFase, searchFaseByCodigo, addFase, changeEditFase, editFase, clearFase
} from './faseActions'

class NovaFase extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
        this.getVALUE = this.getVALUE.bind(this)

    }


    componentWillMount() {
        //this.props.clearFase()
        this.props.searchFase()
    }

    keyHandler(e) {
        const { editFase, addFase, isEditedFase, fase, nameFase, idProjetoFase, inicioFase, fimFase, fimEsperadoFase, descricaoFase } = this.props
        if (e.key === 'Enter') {
            editFase(isEditedFase, fase, nameFase, idProjetoFase, inicioFase, fimFase, fimEsperadoFase, descricaoFase)
        }
    }

    getVALUE() {
        const { editFase, addFase, isEditedFase, fase, nameFase, isEditProjetoFase, inicioFase, fimFase, fimEsperadoFase, descricaoFase } = this.props

        editFase(isEditedFase, fase, nameFase, isEditProjetoFase, inicioFase, fimFase, fimEsperadoFase, descricaoFase)
    }
    /*
        const { add, search, name, tipoUsuario, matricula, email, emailAlternative, cpf, endereco, identidade, cargo,
             login, senha, dataNascimento, dataEntrada, dataSaida, camisa, status } = this.props              
     */
    render() {
        const { addFase, nameFase, isEditProjetoFase, inicioFase, fimFase, fimEsperadoFase, descricaoFase } = this.props
        return <div style={{ paddingTop: "20px" }}>
            <div className="socorro row">

                <h1>Editar Fase</h1>

                <br />
                <div className="card col s12 blue lighten-5">
                    <div className="left"><b>Nome:</b></div>
                    <div className="input-field">
                        <input id="name" type="text"
                            placeholder='Nome'

                            onChange={this.props.changeNameFase}

                            value={this.props.nameFase} >
                        </input>

                    </div>
                </div>
                <div className=" card col s6">
                    <div className="center"><b>Data de Inicio:</b></div>
                    <div className="input-field">

                        <input id="datainicio" type="Date"
                            placeholder="DATA DO INICIO"
                            onChange={this.props.changeInicioFase}
                            onKeyUp={this.keyHandler}
                            value={this.props.inicioFase}>
                        </input>
                    </div>
                </div>

                <div className="card col s6">
                    <div className="center"><b>Data do Fim:</b></div>
                    <div className="input-field">

                        <input id="dataNascimento" type="Date"
                            placeholder="DATA DO FIM"
                            onChange={this.props.changeFimFase}
                            onKeyUp={this.keyHandler}
                            value={this.props.fimFase}>
                        </input>
                    </div>
                </div>
                <br />
                <div className=" card col s12 blue lighten-5">
                    <div className="center"><b>Data prevista do fim:</b></div>
                    <div className="input-field">

                        <input id="datafimesperado" type="Date"
                            placeholder="DATA ESPERADA DO FIM"
                            onChange={this.props.changeFimEsperadoFase}
                            onKeyUp={this.keyHandler}
                            value={this.props.fimEsperadoFase}>
                        </input>
                    </div>
                </div>
                <br /><br /><br /><br /><br /><br /><br />

                <div className="left"><b>Descrição:</b></div>
                <div className="input-field col s12">



                    <textarea id="descricao" type="text" cols='50' rows='10'
                        placeholder="Descrição"
                        onChange={this.props.changeDescricaoFase}

                        value={this.props.descricaoFase} >
                    </textarea>

                </div>
                <br /><br />
                <div className="row">
                    <div className="col s4 offset-s4">
                        <ul id="slide-in" >
                            <a className="waves-effect blue darken-1  waves-light btn"
                                onClick={() => [

                                    this.getVALUE()

                                ]

                                }>
                                <b >Salvar</b>
                                <i className="material-icons orange-text text-lighten-1 right">send</i>
                            </a>
                            <br /><br />
                            <a href="#/fasever" className="waves-effect blue darken-1  waves-light btn"
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
    isEditProjetoFase: state.projeto.isEditedProjeto, nameFase: state.fase.nameFase, idProjetoFase: state.fase.idProjetoFase, inicioFase: state.fase.inicioFase, fimFase: state.fase.fimFase,
    fimEsperadoFase: state.fase.fimEsperadoFase, descricaoFase: state.fase.descricaoFase, isEditedFase: state.fase.isEditedFase
})
const mapDispatchToProps = dispatch =>
    bindActionCreators({
        changeNameFase, changeIdProjetoFase, changeInicioFase, changeFimFase, changeFimEsperadoFase, changeDescricaoFase, searchFase, searchFaseByCodigo, addFase, changeEditFase, editFase, clearFase
    }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(NovaFase)
