import axios from 'axios'

const URL = 'http://localhost:3003/api/postagem'


export const changeTextoPost = event => ({
    type: 'TEXTOPOST_CHANGED',
    payload: event.target.value
})

export const changeDataPost = event => ({
    type: 'DATAPOST_CHANGED',
    payload: event.target.value
})

export const changeIdColaboradorPost = event => ({
    type: 'IDCOLABORADORPOST_CHANGED',
    payload: event.target.value
})




export const searchPost = (texto) => {
    return (dispatch, getState) => {
        const texto = getState().post.textoPost
        const search = texto ? `&texto__regex=/${texto}/` : ''
        const request = axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => dispatch({ type: 'POST_SEARCHED', payload: resp.data }))
    }
}
export const searchPostId = (idFase) => {
    return (dispatch, getState) => {
        
        
        const searchpost = idFase ? `&idFase__regex=/${idFase}/` : ''
        const request = axios.get(`${URL}?sort=-createdAt${searchpost}`)
            .then(resp => dispatch({ type: 'POST_SEARCHED', payload: resp.data }))
            

    }

}

export const addPost = (texto,data,idColaborador,idFase,nameColaborador) => {
    return dispatch => {
        
        alert(texto)
        axios.post(URL, {texto,data,idColaborador,idFase,nameColaborador})
        .then(resp => dispatch(searchPostId(idFase)))
           
    }
}

export const changeEditPost = (post) => {
    return{
       type: 'ISEDITEDPOST_SEARCHED',
       payload: post
    }
}


export const clearPost = () => {
    return [{ type: 'POST_CLEAR' }, searchPost()]
}


export const changeCountPost = event => ({
    type: 'COUNTPOST_CHANGED',
    payload: 3
})
