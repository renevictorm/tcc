import React from 'react'
import { connect } from 'react-redux'
import IconButton from '../template/iconButton'
import store from "../store/index.js";
import { bindActionCreators } from 'redux'
import { searchPostId, changeDataPost, changeCountPost, changeTextoPost, changeEditPost, changeIdColaboradorPost, addPost } from './fasePostsActions.js'


const FasePosts = props => {
    const teste = () => {

        if (props.countPost < 2) {
            props.changeCountPost()
            props.searchPostId(props.isEditedFase)

        }
    }
    const usuarioAtual = store.getState().usuarioAtual;
    const renderRows2 = () => {
        teste()
        const list = props.list || []
        const idFase = props.isEditedFase
        return list.map(post => (
            <div className="col s12" key={post._id}>
                <div className="card-action blue lighten-1">
                    <div className=" white-text">
                        <font size="2">{post.nameColaborador}:{post.data.substring(0, 10)}</font>



                    </div>
                    

                </div>
                <div className="card-action white lighten-1">
                    <div className=" black-text">
                        <font size="4">{post.texto}</font>



                    </div>
                    

                </div>
            </div>
        ))
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
const mapDosátchToProps = (dispatch) => bindActionCreators({ searchPostId, addPost, changeDataPost, changeCountPost, changeTextoPost, changeEditPost, changeIdColaboradorPost }, dispatch)
export default connect(mapStateToProps, mapDosátchToProps)(FasePosts)
