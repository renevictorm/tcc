import React from 'react'
import { connect } from 'react-redux'
import IconButton from '../template/iconButton'

import { bindActionCreators } from 'redux'
import { markAsDone, markAsPending, remove, edit, changeEdit } from './colaboradorActions'
/*
                    <<div id='sobe' className="card-action teal darken-4 white-text">
                        <a  className=" btn gray darken-4 "
                        onClick={ document.getElementById("sobedesce").className = "card-action teal darken-2 white-text naomostra"}
                        ><i className="material-icons small ">{"arrow_upward"}</i></a>

                    </div>div id='desce' className="card-action teal darken-4 white-text" style={{ dysplay: "none"}}>
                        <a className=" btn gray darken-4 " 
                        onClick={ document.getElementById("desce").className = "card-action teal darken-1 white-text"}
                        ><i className="material-icons small ">{"arrow_downward"}</i></a>

                    </div>
                    
                 


                    <div id='sobedesce' className="card-action teal darken-2 white-text naomostra">
                        <ul className="center">
                            <font size='3'><b>STATUS:</b>{colaborador.status}</font>
                        </ul>
                        <ul className="center">
                            <font size='3'><b>MATRÍCULA:</b>{colaborador.matricula}</font>
                        </ul>
                        <ul className="center">
                            <font size='3'><b>EMAIL: </b>{colaborador.email}</font>
                        </ul>
                        <ul className="center">
                            <font size='3'><b>EMAIL 2:</b> {colaborador.emailAlternative}</font>
                        </ul>
                        <ul className="center">
                            <font size='3'><b>ENTRADA:</b>{colaborador.dataEntrada}</font>
                        </ul>
                        <ul className="center">
                            <font size='3'><b>SAÍDA:</b>{colaborador.dataSaida}</font>
                        </ul>



                    </div>
                    */
const ColaboradorList = props => {
    {
        function exibir() {
            document.getElementById("dvConteudo").style.display = "block";
        }
    }
    const renderRows = () => {

        const list = props.list || []
        return list.map(colaborador => (
            <tr key={colaborador._id} className='hide-on-large-only'>
                <td >{colaborador.name}</td>
                <td>

                    <a href='#/colaboradore' className="waves-effect waves btn #1565c0 blue darken-3"
                        onClick={() => props.changeEdit(colaborador)}>
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
        return list.map(colaborador => (
            <div className="col s3" key={colaborador._id}>
                <div className="card blue lighten-1">
                    <div className="card-content white-text">
                        <a className="card-title center white-text" style={{ cursor: "pointer" }}><b>{colaborador.name}</b></a>

                        <ul className="center">
                            <font size='5'><b>{colaborador.cargo}</b></font>
                        </ul>
                    </div>
                    <div className="card-action  center blue darken-3">
                        <a href='#/colaboradore' className="waves-effect waves btn #1565c9 blue darken-1"
                            onClick={() => props.changeEdit(colaborador)}>
                            <i className="material-icons left">{"edit"}</i>

                        </a>
                        <a href='#/colaboradorver' className="waves-effect waves btn #1565c9 orange lighten-1"
                            onClick={() => props.changeEdit(colaborador)}>
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
