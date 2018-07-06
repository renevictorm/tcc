import React from 'react'
import { connect } from 'react-redux'
import IconButton from '../template/iconButton'

import { bindActionCreators } from 'redux'
import { changeCountFase, editFase, changeEditFase, searchFaseId } from './faseActions.js'


const FaseList = props => {

    const rendercompetencias = (name, idProjeto, inicio, fim, fimEsperado, descricao,fase) => {


        //if (props.isEditedProjeto == props.listFase[i].idProjeto) {
        return (

            <div className="card-action row white-text blue lighten-1">
                <div className="card-action col s6 white-text blue lighten-1">

                    <h5><b>{name}:</b> </h5>


                </div>
                <div className="card-action col s6 white-text blue lighten-1">

                   <a href='#/fasee' className="waves-effect waves btn #1565c9 blue darken-1"
                            onClick={() => props.changeEditFase(fase)}>
                            <i className="material-icons left">{"edit"}</i>

                        </a>
                        <a href='#/fasever' className="waves-effect waves btn #1565c9 orange darken-1"
                            onClick={() => props.changeEditFase(fase)}>
                            <i className="material-icons left">{"search"}</i>
                        </a>

                </div>
            </div>

        )
        // }



    }

    const teste = () => {

        if (props.countFase < 2) {

            props.changeCountFase()
            props.searchFaseId(props.isEditedProjeto)

        }
    }
    const renderRows1 = () => {
        teste()

        const listFase = props.listFase || []
        return listFase.map(fase => (



            <div className="card-content blue lighten-1" key={fase._id}>


                {rendercompetencias(fase.name, fase.idProjeto, fase.inicio, fase.fim, fase.fimEsperado, fase.descricao,fase)}


            </div>

        ))

    }



    return (
        <div>
            <div className="row hide-on-med-and-down">
                <div className="col s12">
                <br/>
                    <div className="divider" />
                    <div className="row">
                    <br/>
                        {renderRows1()}
                    </div>
                </div>
            </div>




        </div>
    )
}

const mapStateToProps = state => ({ listFase: state.fase.listFase, isEditedProjeto: state.projeto.isEditedProjeto, countFase: state.fase.countFase })
const mapDosátchToProps = (dispatch) => bindActionCreators({ changeCountFase, editFase, changeEditFase, searchFaseId }, dispatch)
export default connect(mapStateToProps, mapDosátchToProps)(FaseList)
