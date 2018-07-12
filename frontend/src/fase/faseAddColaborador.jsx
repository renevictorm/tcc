import React from 'react'
import { connect } from 'react-redux'
import IconButton from '../template/iconButton'
import Grid from '../template/grid'
import { bindActionCreators } from 'redux'
import { edit, changeEdit, search } from '../colaborador/colaboradorActions.js'
import { addFC, removeFC, searchFC, changeCountFC, clearFC } from './faseColaboradorActions.js'
import { searchCCTotal } from '../colaborador/ccActions.js'
import { searchComp, changeName, clear } from '../competencia/competenciaActions.js'

const FaseColaboradorList = props => {
   
    const rendercompetencias = (name, nivel) => {
       
if( props.competenciaName != ''){
                if (nivel == 1){
                    return (<div>
                        <h5 className='center'><b>{name}:</b> <br/><br/> <i className="material-icons ">{"star"}</i><i className="material-icons">{"star_border"}</i><i className="material-icons ">{"star_border"}</i><i className="material-icons">{"star_border"}</i><i className="material-icons ">{"star_border"}</i></h5>
                    </div>)
                }
                if (nivel == 2){
                    return (<div>
                       <h5 className='center'><b>{name}:</b> <br/><br/><i className="material-icons ">{"star"}</i><i className="material-icons">{"star"}</i><i className="material-icons ">{"star_border"}</i><i className="material-icons">{"star_border"}</i><i className="material-icons ">{"star_border"}</i></h5>
                    </div>)
                }
                if (nivel == 3){
                    return (<div>
                        <h5 className='center'><b>{name}:</b> <br/><br/> <i className="material-icons ">{"star"}</i><i className="material-icons">{"star"}</i><i className="material-icons ">{"star"}</i><i className="material-icons">{"star_border"}</i><i className="material-icons ">{"star_border"}</i></h5>
                    </div>)
                }
                if (nivel == 4){
                    return (<div>
                        <h5 className='center'><b>{name}:</b> <br/><br/> <i className="material-icons ">{"star"}</i><i className="material-icons">{"star"}</i><i className="material-icons ">{"star"}</i><i className="material-icons">{"star"}</i><i className="material-icons ">{"star_border"}</i></h5>
                    </div>)
                }
                if (nivel == 5){
                    return (<div>
                       <h5 className='center'><b>{name}:</b> <br/><br/> <i className="material-icons ">{"star"}</i><i className="material-icons">{"star"}</i><i className="material-icons ">{"star"}</i><i className="material-icons">{"star"}</i><i className="material-icons ">{"star"}</i></h5>
                    </div>)
                }

            }
         



    }
    const rendercolaborador = (idFase, colaboradorid) => {
        var i;
        var j = false;
        for (i = 0; i < props.list.length; i++) {
            if (colaboradorid == props.list[i]._id) {


                return (<div>
                    <h5 className='center'><b>{props.list[i].name}</b> <br /><br /></h5>
                </div>)



            }
        }



    }

    const adicionar = (idFase, colaboradorid) => {
        var i;
        var j = false;
        //alert(idFase)
        for (i = 0; i < props.listfc.length; i++) {
            if (colaboradorid == props.listfc[i].idColaborador) { j = true }
        }
        if (j) {
            alert('Já existe, seu arrombado')

        } else {

            props.addFC(idFase, colaboradorid)
        }
    }

    const remover = (idFase, colaboradorid) => {
        var i;
        var j = false;
        for (i = 0; i < props.listfc.length; i++) {
            if (colaboradorid == props.listfc[i].idColaborador) { j = true }
        }
        if (j) {
            props.removeFC(idFase, colaboradorid)

        } else {
            alert('não existe, seu arrombado')
        }
    }
    const teste = () => {

        if (props.count < 2) {
            props.changeCountFC()
            props.searchFC(props.isEditedFase)
            props.searchCCTotal()
            props.clear()
            window.history.replaceState('Object', 'bemvindo', '#/projetopp')

        }
    }
    const renderRows1 = () => {
        teste()

        const listfc = props.listfc || []
        return listfc.map(fc => (

            <div className="col s2 " key={fc._id}>

                <div className="card blue lighten-1">
                    <div className="card-content white-text">
                        {rendercolaborador(fc.idFase, fc.idColaborador)}

                    </div>

                </div>
            </div>
        ))
    }

    const rendercolaboradorP = (colaborador, idFase) => {
        //console.log(props.listComp)
        //console.log(props.listcc[0].idColaborador, `==`,colaborador._id)
        var k;
        var l;
        for (k = 0; k < props.listcc.length; k++) {

            if (colaborador._id == props.listcc[k].idColaborador) {
                //console.log(props.listcc[k].idColaborador, `==`,colaborador._id)
                for (l = 0; l < props.listComp.length; l++) {
                    //console.log(props.listcc[k].idCompetencia, `==`,props.listComp[l]._id)
                    if (props.listcc[k].idCompetencia == props.listComp[l]._id) {

                        return (
                            <div className="col s4">
                                <div className="card blue lighten-1">
                                    <div className="card-content white-text">
                                        <h3 className="card-title center white-text" style={{ cursor: "pointer" }}><b>{colaborador.name}</b></h3>
                                        {rendercompetencias(props.listComp[l].name,  props.listcc[k].nivel)}

                                    </div>
                                    <div className="card-action blue darken-2 center">



                                        <a className="btn blue darken-4 "
                                            onClick={() => {
                                                adicionar(idFase, colaborador._id)






                                            }} >

                                            <i className="material-icons center">{"add"}</i>
                                        </a>


                                        <a className="btn orange "
                                            onClick={() => {
                                                remover(idFase, colaborador._id)








                                            }} >

                                            <i className="material-icons center">{"remove"}</i>
                                        </a>
                                    </div>
                                </div>
                            </div>)
                    }
                }
            }
        }


    }
    const renderRows2 = () => {

        const list = props.list || []
        const idFase = props.isEditedFase
        return list.map(colaborador => (
            <div  key={colaborador._id}>
                {rendercolaboradorP(colaborador, idFase)}
            </div>
        ))
    }
 
    const renderRows3 = () => {
     

        return (
            <div role='form' className='socorro3'>
                <Grid cols='12 9 10'>
                    <input id='name' className='form-control'
                        placeholder='Pesquise colaboradore por competências'
                        onChange={props.changeName}

                        value={props.competenciaName}
                    ></input>
                </Grid>
                <Grid cols='12 3 2'>

                    <a className="waves-effect waves btn #1565c0 blue darken-1 left"
                        onClick={props.searchComp}>

                        <i className="material-icons ">{"search"}</i>
                    </a>
                    <a className="waves-effect waves btn #1565c0 orange lighten-1 left"
                        onClick={props.clear}>

                        <i className="material-icons ">{"clear"}</i>
                    </a>

                </Grid>

            </div>
        )


    }
    return (
        <div>

            <div className="row hide-on-med-and-down">
                <div className="col s12">

                    <div className="divider" />
                    <br /><a href="#/fasever" className="waves-effect blue darken-1  waves-light btn"
                    >
                        <b >Voltar</b>
                        <i className="material-icons orange-text text-lighten-1 right">redo</i>
                    </a>
                    <div className="row">
                        {renderRows3()}

                    </div>
                </div>
            </div>
            <div className="row hide-on-med-and-down">
                <div className="col s12">
                    <h3>Colaborador(es) da Fase '{props.nameFase}':</h3>
                    <div className="divider" />
                    <div className="row">
                        {renderRows1()}

                    </div>
                </div>
            </div>

            <div className="row hide-on-med-and-down">
                <div className="col s12">


                    <br /><br />
                    <h3>Todos os Colaboradores:</h3>
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

const mapStateToProps = state => ({
    nameFase: state.fase.nameFase, list: state.colaborador.list, listfc: state.fc.listfc, isEditedFase: state.fase.isEditedFase,
    listcc: state.cc.list, name: state.projeto.name, count: state.fc.countfc, competenciaName: state.competencia.name, listComp: state.competencia.list
})
const mapDosátchToProps = (dispatch) => bindActionCreators({ searchComp, clear, changeName, searchCCTotal, edit, changeEdit, search, addFC, removeFC, searchFC, changeCountFC, clearFC }, dispatch)
export default connect(mapStateToProps, mapDosátchToProps)(FaseColaboradorList)
