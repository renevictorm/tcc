import React from 'react'
import { connect } from 'react-redux'
import IconButton from '../template/iconButton'

import { bindActionCreators } from 'redux'
import { remove, edit, changeEdit } from './competenciaActions'
import { addCC, removeCCSsimples, searchCC, changeCount, clearCC, searchCCTotal } from '../colaborador/ccActions.js'


    const CompetenciaList = props => {
       

        const removerDeColaboradorCompetencia = (competenciaid) => {
            var i;
            var j = false;
            
            for (i = 0; i <(props.listcc.length); i++) {
                
                if (competenciaid == props.listcc[i].idCompetencia) {
        
        
                    props.removeCCSsimples(competenciaid)
        
        
                  
                }
                props.clearCC()
            }
        }
        const renderRows = () => {
        
            const list = props.list || []
            return list.map(competencia => (
                <tr key={competencia._id} className='hide-on-large-only'>
                    <td >{competencia.name}</td>
                    <td>

                        <a href='#/competenciae' className="waves-effect waves btn #1565c0 blue darken-3"
                            onClick={() => props.changeEdit(competencia)}>
                            editar
                    <i className="material-icons left">{"add"}</i>
                        </a>
                    </td>

                </tr>
            ))
        }
        const renderRows2 = () => {
            
            const list = props.list || []
            return list.map(competencia => (
                <div className="col s4" key={competencia._id}>
                    <div className="card teal lighten-1">
                        <div className="card-content white-text">
                            <a className="card-title center white-text" style={{ cursor: "pointer" }}>{competencia.name}</a>


                        </div>
                        <div className="card-action teal darken-2">
                            <a href='#/competenciae' className="btn blue darken-4  "
                                onClick={() =>
                                    props.changeEdit(competencia)
                                } style={{ float: "none", cursor: "pointer" }}>

                                <i className="material-icons left">{"edit"}</i>
                            </a>
                            <a onClick={() => {
                                props.remove(competencia)
                                removerDeColaboradorCompetencia(competencia._id)
                            }
                            } className=" btn red darken-4" style={{ float: "right", cursor: "pointer" }}><i className="material-icons">{"clear"}</i></a>
                            <a className=" btn gray darken-4" style={{ float: "none", cursor: "pointer" }}><i className="material-icons">{"search"}</i></a>
                        </div>
                    </div>
                </div>
            ))
        }
        return (
            <div>

                <div className="row hide-on-med-and-down">
                    <div className="col s12">
                        <h3>Competências:</h3>
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

                            {renderRows()}

                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

    const mapStateToProps = state => ({ list: state.competencia.list, listcc: state.cc.list })
    const mapDosátchToProps = (dispatch) => bindActionCreators({ remove, edit, changeEdit, addCC, removeCCSsimples, searchCC, changeCount, clearCC, searchCCTotal }, dispatch)
    export default connect(mapStateToProps, mapDosátchToProps)(CompetenciaList)
