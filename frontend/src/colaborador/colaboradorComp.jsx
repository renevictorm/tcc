import React from 'react'
import { connect } from 'react-redux'
import IconButton from '../template/iconButton'

import { bindActionCreators } from 'redux'
import { remove, edit, changeEdit, search, searchCompetenciaById } from '../competencia/competenciaActions.js'
import { addCC, removeCC, searchCC, changeCount, clearCC, addCCnivel, changeNivel } from './ccActions.js'
/* var i;
        var j = false;
        for (i = 0; i < props.list.length; i++) {
            if (competenciaid == props.list[i]._id) {
                return(<div> 
                    {props.list[i].name}
                </div>)
                    
                   
            }
        } */


const ColaboradorCompetenciaList = props => {
   
    const rendercompetencias = (idColaborador, competenciaid, nivel) => {
        var i;
        var j = false;
        for (i = 0; i < props.list.length; i++) {
            if (competenciaid == props.list[i]._id) {

                if (nivel == 1){
                    return (<div>
                        <h5 className='center'><b>{props.list[i].name}:</b> <br/><br/> <i className="material-icons ">{"star"}</i><i className="material-icons">{"star_border"}</i><i className="material-icons ">{"star_border"}</i><i className="material-icons">{"star_border"}</i><i className="material-icons ">{"star_border"}</i></h5>
                    </div>)
                }
                if (nivel == 2){
                    return (<div>
                       <h5 className='center'><b>{props.list[i].name}:</b> <br/><br/><i className="material-icons ">{"star"}</i><i className="material-icons">{"star"}</i><i className="material-icons ">{"star_border"}</i><i className="material-icons">{"star_border"}</i><i className="material-icons ">{"star_border"}</i></h5>
                    </div>)
                }
                if (nivel == 3){
                    return (<div>
                        <h5 className='center'><b>{props.list[i].name}:</b> <br/><br/> <i className="material-icons ">{"star"}</i><i className="material-icons">{"star"}</i><i className="material-icons ">{"star"}</i><i className="material-icons">{"star_border"}</i><i className="material-icons ">{"star_border"}</i></h5>
                    </div>)
                }
                if (nivel == 4){
                    return (<div>
                        <h5 className='center'><b>{props.list[i].name}:</b> <br/><br/> <i className="material-icons ">{"star"}</i><i className="material-icons">{"star"}</i><i className="material-icons ">{"star"}</i><i className="material-icons">{"star"}</i><i className="material-icons ">{"star_border"}</i></h5>
                    </div>)
                }
                if (nivel == 5){
                    return (<div>
                       <h5 className='center'><b>{props.list[i].name}:</b> <br/><br/> <i className="material-icons ">{"star"}</i><i className="material-icons">{"star"}</i><i className="material-icons ">{"star"}</i><i className="material-icons">{"star"}</i><i className="material-icons ">{"star"}</i></h5>
                    </div>)
                }


            }
        }



    }

    const adicionar = (idColaborador, competenciaid, nivel) => {
        var i;
        var j = false;
        for (i = 0; i < props.listcc.length; i++) {
            if (competenciaid == props.listcc[i].idCompetencia) { j = true }
        }
        if (j) {
            alert('Já existe, seu arrombado')

        } else {
            props.addCC(idColaborador, competenciaid, nivel)
        }
    }

    const remover = (idColaborador, competenciaid) => {
        var i;
        var j = false;
        for (i = 0; i < props.listcc.length; i++) {
            if (competenciaid == props.listcc[i].idCompetencia) { j = true }
        }
        if (j) {
            props.removeCC(idColaborador, competenciaid)

        } else {
            alert('não existe, seu arrombado')
        }
    }
    const teste = () => {

        if (props.count < 2) {
            props.changeCount()
            props.searchCC(props.isEdited)

        }
    }
    const renderRows1 = () => {
        teste()

        const listcc = props.listcc || []
        return listcc.map(cc => (

            <div className="col s6 " key={cc._id}>

                <div className="card teal lighten-1">
                    <div className="card-content white-text">
                        {rendercompetencias(cc.idColaborador, cc.idCompetencia, cc.nivel)}

                    </div>

                </div>
            </div>
        ))
    }


    const renderRows2 = () => {

        const list = props.list || []
        const idColaborador = props.isEdited
        return list.map(competencia => (
            <div className="col s4" key={competencia._id}>
                <div className="card teal lighten-1">
                    <div className="card-content white-text">
                        <a className="card-title center white-text" style={{ cursor: "pointer" }}>{competencia.name}</a>


                    </div>
                    <div className="card-action teal darken-2 center">


                        <div className="input-field">
                            <input id="observacao" defaultValue='1' type="range" min='1' max='5'
                                placeholder="OBS"
                                onChange={props.changeNivel}

                            >
                            </input>

                        </div>
                        <a className="btn blue darken-4 "
                            onClick={() => {
                                adicionar(idColaborador, competencia._id, props.pontos)






                            }} >

                            <i className="material-icons center">{"add"}</i>
                        </a>


                        <a className="btn red darken-4 "
                            onClick={() => {
                                remover(idColaborador, competencia._id)








                            }} >

                            <i className="material-icons center">{"remove"}</i>
                        </a>
                    </div>
                </div>
            </div>
        ))
    }
    return (
        <div>
            <div className="row hide-on-med-and-down">
                <div className="col s12">
                    <h3>Competências de {props.name}:</h3>
                    <div className="divider" />
                    <div className="row">
                        {renderRows1()}
                    </div>
                </div>
            </div>

            <div className="row hide-on-med-and-down">
                <div className="col s12">
                    <h3>Todas as competências:</h3>
                    <div className="divider" />
                    <div className="row">
                        {renderRows2()}
                    </div>
                </div>
            </div>


            <div className='socorro3 hide-on-large-only'>
                <table >
                    <thead>
                        <tr>
                            <th>Nome</th>


                            <th className='left' >Ações</th>
                        </tr>
                    </thead>
                    <tbody >



                    </tbody>
                </table>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({ list: state.competencia.list, listcc: state.cc.list, isEdited: state.colaborador.isEdited, name: state.colaborador.name, count: state.cc.count, listById: state.competencia.listById, pontos: state.cc.nivel })
const mapDosátchToProps = (dispatch) => bindActionCreators({ searchCompetenciaById, search, remove, edit, changeEdit, addCC, removeCC, searchCC, changeCount, clearCC, addCCnivel, changeNivel }, dispatch)
export default connect(mapStateToProps, mapDosátchToProps)(ColaboradorCompetenciaList)
