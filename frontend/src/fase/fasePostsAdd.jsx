import React from 'react'
import { connect } from 'react-redux'
import IconButton from '../template/iconButton'
import store from "../store/index.js";
import { bindActionCreators } from 'redux'
import { clearPost, searchPostId, changeDataPost, changeCountPost, changeTextoPost, changeEditPost, changeIdColaboradorPost, addPost } from './fasePostsActions.js'


const FasePostsAdd = props => {
    const teste = () => {


        props.clearPost()


    }
    const usuarioAtual = store.getState().usuarioAtual;
    const renderRows2 = () => {
        return (
            <div>
                <textarea id="descricao" type="text" cols='50' rows='10'
                    placeholder="Descrição"
                    onChange={props.changeTextoPost}

                    value={props.textoPost} >
                </textarea>
                <a  className="waves-effect blue darken-1  waves-light btn"
                    onClick={() => [

                        props.addPost(props.textoPost, props.dataPost, usuarioAtual.id, props.isEditedFase, usuarioAtual.name),
                       
                    ]

                    }>
                    <b >Salvar</b>
                    <i className="material-icons orange-text text-lighten-1 right">send</i>
                </a>
                <br /><br />
            </div>)
    }
    return (
        <div>
            <div className="row hide-on-med-and-down">
                <div className="col s12">
                    <div className="input-field col s12">

                        {renderRows2()}
                    </div>

                </div>
            </div>
           




        </div>
    )
}

const mapStateToProps = state => ({
    textoPost: state.post.textoPost, idColboradorPost: state.post.idColboradorPost, dataPost: state.post.dataPost,
    isEditedPost: state.post.isEditedPost, countPost: state.post.countPost, isEditedFase: state.fase.isEditedFase,
    list: state.post.listPost
})
const mapDosátchToProps = (dispatch) => bindActionCreators({ clearPost, searchPostId, addPost, changeDataPost, changeCountPost, changeTextoPost, changeEditPost, changeIdColaboradorPost }, dispatch)
export default connect(mapStateToProps, mapDosátchToProps)(FasePostsAdd)
