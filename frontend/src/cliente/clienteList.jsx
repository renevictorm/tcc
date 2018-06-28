import React from 'react'
import { connect } from 'react-redux'
import IconButton from '../template/iconButton'

import { bindActionCreators } from 'redux'
import { editCliente, changeEditCliente } from './clienteActions'

const ClienteList = props => {
    {
        function exibir() {
            document.getElementById("dvConteudo").style.display = "block";
        }
    }
    const renderRows = () => {

        const list = props.list || []
        return list.map(cliente => (
            <tr key={cliente._id} className='hide-on-large-only'>
                <td >{cliente.name}</td>
                <td>

                    <a href='#/clientee' className="waves-effect waves btn #1565c0 blue darken-3"
                        onClick={() => props.changeEditCliente(cliente)}>
                        editar
                    </a>
                    <i className="material-icons left">{"add"}</i>
                    <a className=" btn blue darken-3" style={{ float: "none", cursor: "pointer" }}><i className="material-icons">{"search"}</i></a>


                </td>

            </tr>
        ))
    }
    const renderRows2 = () => {



        const list = props.list || []
        return list.map(cliente => (
            <div className="col s3" key={cliente._id}>
                <div className="card teal lighten-1">
                    <div className="card-content white-text">
                        <a className="card-title center white-text" style={{ cursor: "pointer" }}>{cliente.name}</a>

                        <ul className="center">
                            <font size='5'>{cliente.email}</font>
                        </ul>
                    </div>
                    <div className="card-action teal darken-2">
                        <a href='#/clientee' className="waves-effect waves btn #1565c9 blue darken-3"
                            onClick={() => props.changeEditCliente(cliente)}>
                            <i className="material-icons left">{"edit"}</i>

                        </a>
                        <a href='#/clientever' className="waves-effect waves btn #1565c9 blue darken-3"
                            onClick={() => props.changeEditCliente(cliente)}>
                            <i className="material-icons left">{"search"}</i>
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
                    <h5>Clientes:</h5>
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

const mapStateToProps = state => ({ list: state.cliente.listCliente })
const mapDosátchToProps = (dispatch) => bindActionCreators({editCliente, changeEditCliente }, dispatch)
export default connect(mapStateToProps, mapDosátchToProps)(ClienteList)
