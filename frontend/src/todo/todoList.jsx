import React from 'react'
import { connect } from 'react-redux'
import IconButton from '../template/iconButton'

import { bindActionCreators } from 'redux'
import { markAsDone, markAsPending, remove } from './todoActions'


const TodoList = props => {

    const renderlinha = (todo,description) => {
     
            if (!todo) {


                return (<td>{description}</td>)



            }else{
                return (<td><strike>{description}</strike></td>)
            }
       

    }
    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (

            <tr key={todo._id}>
             
                {renderlinha(todo.done,todo.description)}
                <td>
                    <IconButton style='blue' icon='check' hide={todo.done}
                        onClick={() => props.markAsDone(todo)}></IconButton>
                    <IconButton style='orange' icon='undo' hide={!todo.done}
                        onClick={() => props.markAsPending(todo)}></IconButton>
                    <IconButton style='red' icon='clear' hide={!todo.done}
                        onClick={() => props.remove(todo)}></IconButton>
                </td>
            </tr>
        ))
    }
    return (
        <table className='socorro'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions' >Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({ list: state.todo.list })
const mapDosátchToProps = (dispatch) => bindActionCreators({ markAsDone, markAsPending, remove }, dispatch)
export default connect(mapStateToProps, mapDosátchToProps)(TodoList)