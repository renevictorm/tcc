import React from 'react'
import { connect } from 'react-redux'
import IconButton from '../template/iconButton'

import { bindActionCreators } from 'redux'
import { markAsDone, markAsPending, remove, edit, changeEdit } from './colaboradorActions'


const ColaboradorList = props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(colaborador => (
            <tr key={colaborador._id}>
                <td className={(colaborador.camisa = "GG") ? 'markedAsDone' : ''}>{colaborador.name}</td>
                <td className>

                    <a href='#/colaboradore' className="waves-effect waves btn #1565c0 blue darken-3 left"
                        onClick={() => props.changeEdit(colaborador)}>
                        editar
                    <i className="material-icons left">{"add"}</i>
                    </a>
                </td>

            </tr>
        ))
    }
    return (
        <div className='socorro3'>
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
    )
}

const mapStateToProps = state => ({ list: state.colaborador.list })
const mapDosátchToProps = (dispatch) => bindActionCreators({ markAsDone, markAsPending, remove, edit, changeEdit }, dispatch)
export default connect(mapStateToProps, mapDosátchToProps)(ColaboradorList)
