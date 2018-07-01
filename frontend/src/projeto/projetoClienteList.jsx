import React from 'react'
import { connect } from 'react-redux'
import IconButton from '../template/iconButton'

import { bindActionCreators } from 'redux'
import { editCliente, changeEditCliente, searchCliente } from '../cliente/clienteActions.js'
import { addPC, removePC, searchPC, changeCount, clearPC, addPCresponsavel, changeResponsavel } from './projetoClienteActions.js'

//import { remove, edit, changeEdit, search, searchClienteById } from '../cliente/clienteActions.js'
//import { addPC, removePC, searchPC, changeCount, clearPC, addPCresponsavel, changeResponsavel } from './pcActions.js'
/* var i;
        var j = false;
        for (i = 0; i < props.list.length; i++) {
            if (clienteid == props.list[i]._id) {
                return(<div> 
                    {props.list[i].name}
                </div>)
                    
                   
            }
        } */


const ProjetoClienteList = props => {

    const renderclientes = (idProjeto, clienteid, responsavel) => {
        var i;
        var j = false;
        for (i = 0; i < props.list.length; i++) {
            if (clienteid == props.list[i]._id) {

                if (responsavel == 1) {
                    return (<div>
                        <div className=" orange lighten-1"><h4 className='center'><b>{props.list[i].name}:</b></h4></div>
                        <div className=" orange darken-2 "><h5>Cliente Responsável</h5></div>
                    </div>)
                }
                if (responsavel == 2) {
                    return (<div>
                        <h5 className='center'><b>{props.list[i].name}:</b> <br /><br /> Cliente Comum</h5>
                    </div>)
                }



            }
        }



    }


    const teste = () => {

        if (props.count < 2) {
            props.changeCount()
            props.searchPC(props.isEditedProjeto)

        }
    }
    const renderRows1 = () => {
        teste()

        const listpc = props.listpc || []
        return listpc.map(pc => (

            <div className="col s12 " key={pc._id}>

                <div className=" card orange darken-2">
                    <div className="card-content white-text">
                        {renderclientes(pc.idProjeto, pc.idCliente, pc.responsavel)}

                    </div>

                </div>
            </div>
        ))
    }



    return (
        <div>
            <div className="row hide-on-med-and-down">
                <div className="col s12">
                    <h4><b>Cliente(s):</b></h4>
                    <div className="divider" />
                    <div className="row">
                        {renderRows1()}
                    </div>
                </div>
            </div>



        </div>
    )
}

const mapStateToProps = state => ({ nameProjeto: state.projeto.nameProjeto, list: state.cliente.listCliente, listpc: state.pc.list, isEditedProjeto: state.projeto.isEditedProjeto, name: state.projeto.name, count: state.pc.count, listById: state.cliente.listById, responsavel: state.pc.responsavel })
const mapDosátchToProps = (dispatch) => bindActionCreators({ searchCliente, editCliente, changeEditCliente, addPC, removePC, searchPC, changeCount, clearPC, addPCresponsavel, changeResponsavel }, dispatch)
export default connect(mapStateToProps, mapDosátchToProps)(ProjetoClienteList)
