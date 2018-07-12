import React, { Component } from "react"
import { connect } from 'react-redux'
import Grid from '../template/grid'
import { bindActionCreators } from 'redux'
import {
    editProjeto, addProjeto, changeNameProjeto, changeCodigoProjeto, searchProjetoV, clearProjeto, changeInicioProjeto, changeSituacaoProjeto, changeFimProjeto,
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
        this.props.searchProjetoV()
        window.history.replaceState('Object', 'bemvindo', '#/projetopp')
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
    calcularPreco() {
        //console.log('oi')

        var i;
        var precdia = 0;
        var dias = 0;
        var somadias = 0;
        var numproj = 0;
        var dataii = new Date(this.props.inicioProjeto.substring(0, 10));
        var dataff = new Date(this.props.fimEsperadoProjeto.substring(0, 10));
        var praso = ((dataff.getTime() - dataii.getTime()));
        for (i = 0; i < this.props.listProjeto.length; i++) {
            if (this.props.listProjeto[i].situacao == 'Finalizado') {
                if (this.props.tipoProjeto == this.props.listProjeto[i].tipo) {

                    var datai = new Date(this.props.listProjeto[i].inicio.substring(0, 10))
                    var dataf = new Date(this.props.listProjeto[i].fim.substring(0, 10))
                    dias = ((dataf.getTime() - datai.getTime()) / 86400000);
                    precdia = Math.round(this.props.listProjeto[i].precoReal / dias)
                    somadias = somadias + precdia
                    numproj = numproj + 1;
                }

            }
        }

    
        if (numproj > 0) {
            alert('O preco medio para esse projeto do tipo "' + this.props.tipoProjeto + '" é de: ' + Math.round((somadias / numproj) *( praso/ 86400000)) + ' R$.')
        } else {
            alert('Não há nenhum projeto do tipo " ' + this.props.tipoProjeto + '" finalizado ainda')
        }
    }
    calcularData() {
        //console.log('oi')

        var i;
        var somadias = 0;
        var numproj = 0
        for (i = 0; i < this.props.listProjeto.length; i++) {
            if (this.props.listProjeto[i].situacao == 'Finalizado') {
                if (this.props.tipoProjeto == this.props.listProjeto[i].tipo) {
                    var datai = new Date(this.props.listProjeto[i].inicio.substring(0, 10))
                    var dataf = new Date(this.props.listProjeto[i].fim.substring(0, 10))
                    //var dias= new
                    //console.log((dataf.getTime()-datai.getTime())/86400000)
                    somadias = somadias + ((dataf.getTime() - datai.getTime()) / 86400000);
                    numproj = numproj + 1;



                }

            }
        }
        if (numproj > 0) {
            alert('O número medio de dias para projetos do tipo "' + this.props.tipoProjeto + '" é de: ' + Math.round(somadias / numproj) + ' dias.')
        } else {
            alert('Não há nenhum projeto do tipo " ' + this.props.tipoProjeto + '" finalizado ainda')
        }
    }
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

                <div className="card col s6 blue lighten-5">
                    <div className="left"><b>Situação:</b></div>
                    <div className="input-field">
                        <input id="situacao" type="text"
                            placeholder='Situação'
                            onChange={this.props.changeSituacaoProjeto}
                            value={this.props.situacaoProjeto} >
                        </input>

                    </div>
                </div>

                <div className="card col s6 blue lighten-5">
                    <div className="left"><b>Tipo:</b></div>
                    <div className="input-field">
                        <input id="tipo" type="text"
                            placeholder='Tipo'
                            onChange={this.props.changeTipoProjeto}
                            value={this.props.tipoProjeto} >
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
                            value={this.props.inicioProjeto.substring(0, 10)}>
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
                            value={this.props.fimProjeto.substring(0, 10)}>
                        </input>
                    </div>
                </div>
                <br />
                <div className=" card col s6 blue lighten-5">
                    <div className="center"><b>Data prevista do fim:</b></div>
                    <div className="input-field">

                        <input id="datafimesperado" type="Date"
                            placeholder="DATA ESPERADA DO FIM"
                            onChange={this.props.changeFimEsperadoProjeto}
                            onKeyUp={this.keyHandler}
                            value={this.props.fimEsperadoProjeto.substring(0, 10)}>
                        </input>
                    </div>
                </div>
                <div className=" col s6  ">


                    <div className="input-field">
                        <br /><br />
                        <a className="waves-effect blue lighten-2  waves-light btn"
                            onClick={() => [

                                this.calcularData()

                            ]}>
                            <b >Calcular Tempo</b>
                            <i className="material-icons orange-text text-lighten-1 right">send</i>
                        </a>
                        <br /><br /><br />
                    </div>
                </div>

                <div className="card col s6">

                    <div className="left"><b>Preço Estipulado:</b></div>
                    <div className="input-field">
                        <input id="pe" type="text"
                            placeholder="Preço Estipulado"
                            onChange={this.props.changePrecoEsperadoProjeto}
                            value={this.props.precoEsperadoProjeto} >
                        </input>


                    </div>
                </div>
                <div className=" col s6 ">


                    <div className="input-field">
                        <br /><br />
                        <a className="waves-effect blue lighten-2  waves-light btn"
                        onClick={() => [

                            this.calcularPreco()

                        ]}>
                            <b >Calcular Preço Médio</b>
                            <i className="material-icons orange-text text-lighten-1 right">send</i>
                        </a>
                        <br /><br /><br />
                    </div>
                </div>
                <div className="card col s6 blue lighten-5 ">
                    <div className="left"><b>Preço Real:</b></div>
                    <div className="input-field">
                        <input id="pr" type="text"
                            placeholder='PreçoReal'
                            onChange={this.props.changePrecoRealProjeto}
                            value={this.props.precoRealProjeto} >
                        </input>

                    </div>
                </div>
                <div className="card col s6 blue lighten-5">

                    <div className="left"><b>Gastos</b></div>
                    <div className="input-field">
                        <input id="gastos" type="text"
                            placeholder="Gastos"
                            onChange={this.props.changeGastosProjeto}
                            value={this.props.gastosProjeto} >
                        </input>


                    </div>
                </div>









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
                            <a className="waves-effect blue darken-1  waves-light btn"
                                onClick={() => [

                                    this.getVALUE()

                                ]

                                }>
                                <b >Salvar</b>
                                <i className="material-icons orange-text text-lighten-1 right">send</i>
                            </a>
                            <br /><br /><br />
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
    listProjeto: state.projeto.listProjeto, nameProjeto: state.projeto.nameProjeto, codigoProjeto: state.projeto.codigoProjeto, inicioProjeto: state.projeto.inicioProjeto, situacaoProjeto: state.projeto.situacaoProjeto,
    fimProjeto: state.projeto.fimProjeto, fimEsperadoProjeto: state.projeto.fimEsperadoProjeto, tipoProjeto: state.projeto.tipoProjeto, precoRealProjeto: state.projeto.precoRealProjeto,
    precoEsperadoProjeto: state.projeto.precoEsperadoProjeto, descricaoProjeto: state.projeto.descricaoProjeto, gastosProjeto: state.projeto.gastosProjeto, isEditedProjeto: state.projeto.isEditedProjeto
})
const mapDispatchToProps = dispatch =>
    bindActionCreators({
        editProjeto, addProjeto, changeNameProjeto, changeCodigoProjeto, searchProjetoV, clearProjeto, changeInicioProjeto, changeSituacaoProjeto, changeFimProjeto,
        changeFimEsperadoProjeto, changeTipoProjeto, changePrecoRealProjeto, changePrecoEsperadoProjeto, changeDescricaoProjeto, changeGastosProjeto
    }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ProjetoEdit)
