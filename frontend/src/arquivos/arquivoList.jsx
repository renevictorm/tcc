import React from 'react'
import { connect } from 'react-redux'
import IconButton from '../template/iconButton'

import { bindActionCreators } from 'redux'
import {  searchArquivo} from './arquivoActions'
/**
                    <a href='#/colaboradore' className="waves-effect waves btn #1565c0 blue darken-3"
                        onClick={() => props.changeEdit(colaborador)}>
                        editar
                    </a>
                    <i className="material-icons left">{"add"}</i>
                    <a className=" btn blue darken-3" style={{ float: "none", cursor: "pointer" }}><i className="material-icons">{"search"}</i></a>
 */
const ArquivoList = props => {

    const renderRows = () => {

        const list = props.list || []
        return list.map(arquivo => (
            <tr key={arquivo._id} className='hide-on-large-only'>
                <td >{arquivo.name}</td>
                <td>


                </td>

            </tr>
        ))
    }
    const renderRows2 = () => {



        const list = props.list || []
        return list.map(arquivo => (
            <div className="col s3" key={arquivo._id}>
                <div className="card blue lighten-1">
                    <div className="card-content white-text">
                        <a className="card-title center white-text" style={{ cursor: "pointer" }}><b>{arquivo.name}</b></a>

                       
                    </div>
                    <div className="card-action  center blue darken-3">
                 
                        <a href={arquivo.file+''} className="waves-effect waves btn #1565c9 orange lighten-1"
                            download={arquivo.name}>
                            <i className="material-icons center">{"file_download"}</i>
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
                    <h5>Arquivos do Projeto: '{props.nameProjeto}'</h5>
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

const mapStateToProps = state => ({ list: state.arquivo.listArquivo, nameProjeto: state.projeto.nameProjeto,  })
const mapDosátchToProps = (dispatch) => bindActionCreators({searchArquivo }, dispatch)
export default connect(mapStateToProps, mapDosátchToProps)(ArquivoList)
