import React, { Component } from "react"
import { connect } from 'react-redux'
import Grid from '../template/grid'
import ProjetoClienteList from './projetoClienteList.jsx'
import FaseList from '../fase/faseList'
import { bindActionCreators } from 'redux'
import { clearFase, searchFase } from '../fase/faseActions'
import { clearCliente } from '../cliente/clienteActions'

import {
    changeEditProjeto, editProjeto, addProjeto, changeNameProjeto, changeCodigoProjeto, searchProjeto, clearProjeto, changeInicioProjeto,
    changeSituacaoProjeto, changeFimProjeto, changeFimEsperadoProjeto, changeTipoProjeto, changePrecoRealProjeto,
    changePrecoEsperadoProjeto, changeDescricaoProjeto, changeGastosProjeto
} from './projetoActions'



class ProjetoVer extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
        this.getVALUE = this.getVALUE.bind(this)
        var escolha1;
    }
    handLinkClick(e) {



    }
    componentWillUnmount() {


    }

    componentWillMount() {
        //window.location.href = '#/bemvindo';
        window.history.replaceState('Object', 'bemvindo', '#/projetopp')


        this.props.clearFase()
        this.props.searchProjeto()
        //this.props.clearCliente()
    }
    keyHandler(e) {

    }

    getVALUE() {


    }

    render() {
        const { projeto, nameProjeto, codigoProjeto, inicioProjeto, situacaoProjeto, fimProjeto, fimEsperadoProjeto,
            tipoProjeto, precoRealProjeto, precoEsperadoProjeto, descricaoProjeto, gastosProjeto } = this.props
        return <div >
            <div className="card-action blue darken-2 center white-text ">
                <h1><b>{nameProjeto}</b></h1>

                <div className="card blue  center white-text ">
                    <h3>{situacaoProjeto}</h3>
                </div>
            </div>
            <div className="card  left white-text ">

                <a href="#/projetop" className="waves-effect blue darken-1  waves-light btn"
                >
                    <b >Voltar</b>
                    <i className="material-icons orange-text text-lighten-1 right">redo</i>
                </a>
            </div><br /><br /><br />
            <div className="row">
                <div className="col s3">
                    <div className="card blue darken-2 col s12 ">
                        <div className="   blue darken-2 white-text">
                            <div className="   blue darken-2 center white-text"> <h5><b>DADOS: </b>
                                </h5></div>

                            <div className="  divider" />
                            <div className="   blue darken-2 white-text"> <h5><b>Código: </b>{codigoProjeto}</h5></div>
                            <div className="   blue darken-1 white-text"> <h5><b>Tipo de projeto: </b>{tipoProjeto}</h5></div>

                            <div className="   blue darken-2 white-text">  <h5><b>Inicio: </b>{inicioProjeto.substring(0, 10)}</h5></div>
                            <div className="   blue  darken-1 white-text"> <h5><b>Fim: </b>{fimProjeto.substring(0, 10)}</h5></div>

                            <div className="   blue darken-2 white-text"> <h5><b>Gastos: </b>{gastosProjeto} R$</h5></div>
                            <div className="   blue  darken-1 white-text"> <h5><b>Descrição: </b>{descricaoProjeto}</h5></div>

                            <div className="center card-action blue darken-2">

                                <a href='#/projetoe' className="waves-effect waves btn orange darken-1"
                                >
                                    <i className="material-icons small center"><b> EDITAR </b> {"edit"}</i>
                                </a>
                                <br/><br/>
                                <a href='#/arquivover' className="waves-effect waves btn orange darken-1"
                                >
                                    <i className="material-icons small center"><b> FILES </b> {"edit"}</i>
                                </a>

                            </div>

                        </div>
                    </div>
                </div>

                <div className=" col s6  card-action ">
                    <br />
                    <a href='#/fase' className="waves-effect waves btn orange darken-1"
                    >
                        <i className="material-icons small center"><b> CRIAR FASE </b> {"add"}</i>
                    </a>
                    <a href='#/arquivo' className="waves-effect waves right btn orange darken-1"
                    >
                        <i className="material-icons small center"><b> ADD FILE </b> {"add"}</i>
                    </a>
                    <div>
                        <FaseList />
                    </div>
                </div>

                <div className=" center col s3">
                    <div className="  card blue darken-2  white-text">

                        <ProjetoClienteList />
                        <div className="  divider" />
                        <br />
                        <a href='#/projetoaddcliente' className="waves-effect waves btn orange darken-1"
                        >
                            <i className="material-icons  center"><b> ADD CLIENTE </b> {"edit"}</i>
                        </a>
                        <br /><br />
                    </div>

                </div>

            </div>



        </div>

    }
}

const mapStateToProps = state => ({
    nameProjeto: state.projeto.nameProjeto, codigoProjeto: state.projeto.codigoProjeto,
    inicioProjeto: state.projeto.inicioProjeto, situacaoProjeto: state.projeto.situacaoProjeto,
    fimProjeto: state.projeto.fimProjeto, fimEsperadoProjeto: state.projeto.fimEsperadoProjeto,
    tipoProjeto: state.projeto.tipoProjeto, precoRealProjeto: state.projeto.precoRealProjeto,
    precoEsperadoProjeto: state.projeto.precoEsperadoProjeto, descricaoProjeto: state.projeto.descricaoProjeto,
    gastosProjeto: state.projeto.gastosProjeto, isEditedProjeto: state.projeto.isEditedProjeto
})
const mapDispatchToProps = dispatch =>
    bindActionCreators({
        searchFase, clearCliente, clearFase, changeEditProjeto, editProjeto, addProjeto, changeNameProjeto, changeCodigoProjeto, searchProjeto, clearProjeto, changeInicioProjeto,
        changeSituacaoProjeto, changeFimProjeto, changeFimEsperadoProjeto, changeTipoProjeto, changePrecoRealProjeto,
        changePrecoEsperadoProjeto, changeDescricaoProjeto, changeGastosProjeto
    }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ProjetoVer)
