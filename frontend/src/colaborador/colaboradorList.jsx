import React from 'react'
import { connect } from 'react-redux'
import IconButton from '../template/iconButton'

import { bindActionCreators } from 'redux'
import { markAsDone, markAsPending, remove, edit, changeEdit } from './colaboradorActions'


const ColaboradorList = props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(colaborador => (
            <tr key={colaborador._id} className='hide-on-large-only'>
                <td className={(colaborador.camisa = "GG") ? 'markedAsDone' : ''}>{colaborador.name}</td>
                <td>

                    <a href='#/colaboradore' className="waves-effect waves btn #1565c0 blue darken-3"
                        onClick={() => props.changeEdit(colaborador)}>
                        editar
                    <i className="material-icons left">{"add"}</i>
                    </a>
                </td>

            </tr>
        ))
    }
    const renderRows2 = () => {
        const list = props.list || []
        return list.map(colaborador => (
            <div className="col s4" key={colaborador._id}>
            <div className="card teal lighten-1">
                <div className="card-content white-text">
                    <a className="card-title center white-text" style={{cursor: "pointer"}}>{colaborador.name}</a>
                    
                    <ul className="center">
                        <font  size='5'>{colaborador.cargo}</font>
                    </ul>
                </div>
                <div className="card-action teal darken-2">
                <a href='#/colaboradore' className="waves-effect waves btn #1565c9 blue darken-3"
                        onClick={() => props.changeEdit(colaborador)}>
                        editar
                    <i className="material-icons left">{"add"}</i>
                    </a>
                    <a className="center btn red darken-4" style={{float:"right", cursor: "pointer"}}>Excluir</a>
                </div>
            </div>
        </div>
        ))
    }
    return (
        <div>

            <div className="row hide-on-med-and-down">
                <div className="col s12">
                    <h5>Colaboradores</h5>
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

const mapStateToProps = state => ({ list: state.colaborador.list })
const mapDosátchToProps = (dispatch) => bindActionCreators({ markAsDone, markAsPending, remove, edit, changeEdit }, dispatch)
export default connect(mapStateToProps, mapDosátchToProps)(ColaboradorList)
