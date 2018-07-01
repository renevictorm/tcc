import React from 'react'
import { connect } from 'react-redux'
import IconButton from '../template/iconButton'

import { bindActionCreators } from 'redux'
import { editProjeto, changeEditProjeto } from './projetoActions'

const ProjetoList = props => {
    {
        function exibir() {
            document.getElementById("dvConteudo").style.display = "block";
        }
    }
    const renderRows = () => {

        const list = props.list || []
        return list.map(projeto => (
            <tr key={projeto._id} className='hide-on-large-only'>
                <td >{projeto.name}</td>
                <td>

                    <a href='#/projetoe' className="waves-effect waves btn #1565c0 blue darken-3"
                        onClick={() => props.changeEditProjeto(projeto)}>
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
        return list.map(projeto => (
            <div className="col s3" key={projeto._id}>
                <div className="card blue ">
                    <div className="card-content white-text">
                        <a className="card-title center white-text" style={{ cursor: "pointer" }}><b>{projeto.name}</b></a>
                      
                        <ul className="center">
                            <font size='5'><b>{projeto.codigo}</b></font>
                        </ul>
                    </div>
                    <div className="card-action blue darken-3 center">
                        <a href='#/projetoe' className="waves-effect waves btn #1565c9 blue darken-1"
                            onClick={() => props.changeEditProjeto(projeto)}>
                            <i className="material-icons left">{"edit"}</i>

                        </a>
                        <a href='#/projetover' className="waves-effect waves btn #1565c9 orange darken-1"
                            onClick={() => props.changeEditProjeto(projeto)}>
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
                    <h5>Projetos:</h5>
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

const mapStateToProps = state => ({ list: state.projeto.listProjeto })
const mapDosátchToProps = (dispatch) => bindActionCreators({editProjeto, changeEditProjeto }, dispatch)
export default connect(mapStateToProps, mapDosátchToProps)(ProjetoList)
