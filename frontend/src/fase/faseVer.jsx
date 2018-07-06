import React, { Component } from "react"
import { connect } from 'react-redux'
import Grid from '../template/grid'
import FaseColaboradorList from './faseColaboradorList'
import FasePosts from './fasePosts'
import FasePostsAdd from './fasePostsAdd'
import {clearPost} from './fasePostsActions'
import { bindActionCreators } from 'redux'
import { clearFase, searchFase, changeCountFase, editFase, changeEditFase, searchFaseId } from '../fase/faseActions'
import { clearFC, searchFC } from './faseColaboradorActions'


/** <form id="frm" >
                            <input type="file" />
                            <button type="button" id="btn_enviar"
                                onClick={() => {

                            

                                    $(document).ready(function () {
                                        $('#btn_enviar').click(function () {
                                            enviar();
                                        });
                                    });
                                    function enviar() {
                                        var formData = new FormData($('#frm')[0]);
                                        $.ajax({
                                            url: 'C:\Users\Unknown\Dropbox\Seminarios\ponto 6\todo-app\frontend\src\fase\fasefiles',
                                            type: "POST",
                                            data: formData,
                                            contentType: false,
                                            processData: false,
                                            dataType: "JSON",
                                            success: function (data) {
                                                console.log(data);
                                            },
                                        });
                                    }





                                }}> Salvar</button>

                        </form> */


class FaseVer extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
        this.getVALUE = this.getVALUE.bind(this)
        var escolha1;
    }
    handLinkClick(e) {



    }
    componentWillUnmount() {
        this.props.clearPost()
        this.props.clearFC()
        this.props.searchFC()

    }

    componentWillMount() {
        //window.location.href = '#/bemvindo';
        window.history.replaceState('Object', 'bemvindo', '#/projetopp')

        this.props.clearPost()
        this.props.clearFC()
        this.props.searchFC()
        //this.props.searchProjeto()
        //this.props.clearCliente()
    }
    keyHandler(e) {

    }

    getVALUE() {



    }

    render() {
        const { codigoProjeto, nameProjeto, nameFase, tipoProjeto, isEditProjetoFase, inicioFase, fimFase, fimEsperadoFase, descricaoFase } = this.props
        return <div >
            <div className="card-action blue darken-2 center white-text ">
                <h1><b>{nameProjeto}</b></h1>

                <div className="card blue  center white-text ">

                    <h3>{nameFase}</h3>
                </div>

            </div>
            <div className="card  left white-text ">

                <a href="#/projetover" className="waves-effect blue darken-1  waves-light btn"
                >
                    <b >Voltar</b>
                    <i className="material-icons orange-text text-lighten-1 right">redo</i>
                </a>
            </div>
            <br /><br /><br />
            <div className="row">
                <div className="col s3">
                    <div className="card blue darken-2 col s12 ">
                        <div className="   blue darken-2 white-text">
                            <div className="   blue darken-2 center white-text"> <h5><b>DADOS DA FASE: </b></h5></div>
                            <div className="  divider" />
                            <div className="   blue darken-2 white-text"> <h5><b>Código: </b>{codigoProjeto}</h5></div>
                            <div className="   blue darken-1 white-text"> <h5><b>Tipo de projeto: </b>{tipoProjeto}</h5></div>

                            <div className="   blue darken-2 white-text">  <h5><b>Inicio: </b>{inicioFase.substring(0, 10)}</h5></div>
                            <div className="   blue  darken-1 white-text"> <h5><b>Fim: </b>{fimFase.substring(0, 10)}</h5></div>

                            <div className="   blue darken-2 white-text"> <h5><b>Fim Estimado: </b><br/>{fimEsperadoFase.substring(0, 10)}</h5></div>
                            <div className="   blue  darken-1 white-text"> <h5><b>Descrição: </b>{descricaoFase}</h5></div>

                            <div className="center card-action blue darken-2">

                                <a href='#/fasee' className="waves-effect waves btn orange darken-1"
                                >
                                    <i className="material-icons small center"><b> EDITAR </b> {"edit"}</i>
                                </a>


                            </div>

                        </div>
                    </div>
                </div>

                <div className=" col s6  card-action ">
                   
                    <div>


                       
                        <FasePostsAdd/>
                        <div className="divider" />
                        <FasePosts/>
                    </div>
                </div>

                <div className=" center col s3">

                    <div className="  card blue darken-2  white-text">


                        <FaseColaboradorList />
                        <div className="divider" />
                        <br />
                        <a href='#/faseaddcolaborador' className="waves-effect waves btn orange darken-1"
                        >
                            <i className="material-icons  center"><b> COLABORADOR </b> {"add"}</i>
                        </a>
                        <br /><br />
                    </div>

                </div>

            </div>



        </div>

    }
}

const mapStateToProps = state => ({
    isEditProjetoFase: state.projeto.isEditedProjeto, nameProjeto: state.projeto.nameProjeto, nameFase: state.fase.nameFase,
    idProjetoFase: state.fase.idProjetoFase, inicioFase: state.fase.inicioFase, fimFase: state.fase.fimFase, codigoProjeto: state.projeto.codigoProjeto,
    fimEsperadoFase: state.fase.fimEsperadoFase, descricaoFase: state.fase.descricaoFase, isEditedFase: state.fase.isEditedFase, tipoProjeto: state.projeto.tipoProjeto

})
const mapDispatchToProps = dispatch =>
    bindActionCreators({
        clearPost,clearFC, searchFC, clearFase, searchFase, changeCountFase, editFase, changeEditFase, searchFaseId
    }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(FaseVer)
