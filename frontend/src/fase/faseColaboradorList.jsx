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
                        <div className=" orange darken-1"><h5 className='center'><b>{props.list[i].name}:</b></h5></div>
                        <div className=" orange darken-1"><h6 className='center'><b>{props.list[i].email}</b></h6></div>
                    </div>)
             


            }
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

            <div className="col s12 " key={fc._id}>

                <div className="card orange darken-1">
                <br/>
                    
                        {rendercolaborador(fc.idFase, fc.idColaborador)}

                     <br/>

                </div>
            </div>
        ))
    }


    return (
        <div>
            <div className="row hide-on-med-and-down">
                <div className="col s12">
                <h5>Colaborador(es) da Fase '{props.nameFase}':</h5>
                    <div className="divider" />
                    <div className="row">
                        {renderRows1()}
                       
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
