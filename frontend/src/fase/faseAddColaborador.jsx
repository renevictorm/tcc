import React from 'react'
import { connect } from 'react-redux'
import IconButton from '../template/iconButton'

import { bindActionCreators } from 'redux'
import { edit, changeEdit, search } from '../colaborador/colaboradorActions.js'
import { addFC, removeFC, searchFC, changeCountFC, clearFC } from './faseColaboradorActions.js'


const FaseColaboradorList = props => {

    const rendercolaborador = (idFase, colaboradorid) => {
        var i;
        var j = false;
        for (i = 0; i < props.list.length; i++) {
            if (colaboradorid == props.list[i]._id) {

               
                    return (<div>
                        <h5 className='center'><b>{props.list[i].name}:</b> <br /><br /></h5>
                    </div>)
             


            }
        }



    }

    const adicionar = (idFase, colaboradorid) => {
        var i;
        var j = false;
        alert(idFase)
        for (i = 0; i < props.listfc.length; i++) {
            if (colaboradorid == props.listfc[i].idColaborador) { j = true }
        }
        if (j) {
            alert('Já existe, seu arrombado')

        } else {

            props.addFC(idFase, colaboradorid)
        }
    }

    const remover = (idFase, colaboradorid) => {
        var i;
        var j = false;
        for (i = 0; i < props.listfc.length; i++) {
            if (colaboradorid == props.listfc[i].idColaborador) { j = true }
        }
        if (j) {
            props.removeFC(idFase, colaboradorid)

        } else {
            alert('não existe, seu arrombado')
        }
    }
    const teste = () => {

        if (props.count < 2) {
            props.changeCountFC()
            props.searchFC(props.isEditedFase)

        }
    }
    const renderRows1 = () => {
        teste()

        const listfc = props.listfc || []
        return listfc.map(fc => (

            <div className="col s6 " key={fc._id}>

                <div className="card teal lighten-1">
                    <div className="card-content white-text">
                        {rendercolaborador(fc.idFase, fc.idColaborador)}

                    </div>

                </div>
            </div>
        ))
    }


    const renderRows2 = () => {

        const list = props.list || []
        const idFase = props.isEditedFase
        return list.map(colaborador => (
            <div className="col s4" key={colaborador._id}>
                <div className="card teal lighten-1">
                    <div className="card-content white-text">
                        <a className="card-title center white-text" style={{ cursor: "pointer" }}>{colaborador.name}</a>


                    </div>
                    <div className="card-action teal darken-2 center">


                      
                        <a className="btn blue darken-4 "
                            onClick={() => {
                                adicionar(idFase, colaborador._id)






                            }} >

                            <i className="material-icons center">{"add"}</i>
                        </a>


                        <a className="btn red darken-4 "
                            onClick={() => {
                                remover(idFase, colaborador._id)








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
                    <h3>Colaborador(es) da Fase '{props.nameFase}':</h3>
                    <div className="divider" />
                    <div className="row">
                        {renderRows1()}
                       
                    </div>
                </div>
            </div>

            <div className="row hide-on-med-and-down">
                <div className="col s12">
                
                        <a href="#/fasever" className="waves-effect blue darken-1  waves-light btn"
                        >
                            <b >Voltar</b>
                            <i className="material-icons orange-text text-lighten-1 right">redo</i>
                        </a>
                        <br/><br/>
                    <h3>Todos os Colaboradores em:</h3>
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

const mapStateToProps = state => ({ nameFase: state.fase.nameFase, list: state.colaborador.list, listfc: state.fc.listfc, isEditedFase: state.fase.isEditedFase, name: state.projeto.name, count: state.fc.countfc })
const mapDosátchToProps = (dispatch) => bindActionCreators({ edit, changeEdit, search, addFC, removeFC, searchFC, changeCountFC, clearFC}, dispatch)
export default connect(mapStateToProps, mapDosátchToProps)(FaseColaboradorList)
