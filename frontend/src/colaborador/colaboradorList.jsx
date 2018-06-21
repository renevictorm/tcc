import React from 'react'
import { connect } from 'react-redux'
//import IconButton from '../template/iconButton'

import { bindActionCreators } from 'redux'
//import { markAsDone, markAsPending, remove } from './todoActions'


const TodoList = props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                
            </tr>
        ))
    }
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Imagem</th>
                    <th>Cargo</th>
                    <th className ='tableActions' >Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}


 export default TodoList