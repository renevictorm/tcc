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
                        <h5 className='center'><b>{props.list[i].name}:</b> <br /><br /> Cliente Responsável</h5>
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

    const adicionar = (idProjeto, clienteid, responsavel) => {
        var i;
        var j = false;
        for (i = 0; i < props.listpc.length; i++) {
            if (clienteid == props.listpc[i].idCliente) { j = true }
        }
        if (j) {
            alert('Já existe, seu arrombado')

        } else {

            props.addPC(idProjeto, clienteid, responsavel)
        }
    }

    const remover = (idProjeto, clienteid) => {
        var i;
        var j = false;
        for (i = 0; i < props.listpc.length; i++) {
            if (clienteid == props.listpc[i].idCliente) { j = true }
        }
        if (j) {
            props.removePC(idProjeto, clienteid)

        } else {
            alert('não existe, seu arrombado')
        }
    }
    const teste = () => {

        if (props.count < 2) {
            props.changeCount()
            props.searchPC(props.isEditedProjeto)
            window.history.replaceState('Object', 'bemvindo', '#/projetopp')

        }
    }
    const renderRows1 = () => {
        teste()

        const listpc = props.listpc || []
        return listpc.map(pc => (

            <div className="col s6 " key={pc._id}>

                <div className="card blue  lighten-1">
                    <div className="card-content white-text">
                        {renderclientes(pc.idProjeto, pc.idCliente, pc.responsavel)}

                    </div>

                </div>
            </div>
        ))
    }


    const renderRows2 = () => {

        const list = props.list || []
        const idProjeto = props.isEditedProjeto
        return list.map(cliente => (
            <div className="col s4" key={cliente._id}>
                <div className="card blue  lighten-1">
                    <div className="card-content white-text">
                        <a className="card-title center white-text" style={{ cursor: "pointer" }}>{cliente.name}</a>


                    </div>
                    <div className="card-action blue  darken-2 center">


                        <div className="input-field">
                            <input id="observacao" defaultValue='1' type="range" min='1' max='2'
                                placeholder="OBS"
                                onChange={props.changeResponsavel}

                            >
                            </input>

                        </div>
                        <a className="btn blue darken-4 "
                            onClick={() => {
                                adicionar(idProjeto, cliente._id, props.responsavel)






                            }} >

                            <i className="material-icons center">{"add"}</i>
                        </a>


                        <a className="btn orange  "
                            onClick={() => {
                                remover(idProjeto, cliente._id)








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
                    <h3>Cliente(s) do Projeto '{props.nameProjeto}':</h3>
                    <div className="divider" />
                    <div className="row">
                        {renderRows1()}
                       
                    </div>
                </div>
            </div>

            <div className="row hide-on-med-and-down">
                <div className="col s12">
                
                        <a href="#/projetover" className="waves-effect blue darken-1  waves-light btn"
                        >
                            <b >Voltar</b>
                            <i className="material-icons orange-text text-lighten-1 right">redo</i>
                        </a>
                        <br/><br/>
                    <h3>Todos os Clientes:</h3>
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

const mapStateToProps = state => ({ nameProjeto: state.projeto.nameProjeto, list: state.cliente.listCliente, listpc: state.pc.list, isEditedProjeto: state.projeto.isEditedProjeto, name: state.projeto.name, count: state.pc.count, listById: state.cliente.listById, responsavel: state.pc.responsavel })
const mapDosátchToProps = (dispatch) => bindActionCreators({ searchCliente, editCliente, changeEditCliente, addPC, removePC, searchPC, changeCount, clearPC, addPCresponsavel, changeResponsavel }, dispatch)
export default connect(mapStateToProps, mapDosátchToProps)(ProjetoClienteList)
