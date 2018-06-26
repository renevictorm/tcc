import axios from 'axios'

const URL = 'http://localhost:3003/api/competencias'


export const changeName = event => ({
    type: 'NAME_CHANGED',
    payload: event.target.value
})

export const changeObservacao = event => ({
    type: 'OBSERVACAO_CHANGED',
    payload: event.target.value
})
  
export const searchComp = (name) => {
    return (dispatch, getState) => {
        const name = getState().competencia.name
        const search = name ? `&name__regex=/${name}/` : ''
        const request = axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => dispatch({ type: 'COMPETENCIA_SEARCHED', payload: resp.data }))
          

    }

}
export const searchCompetenciaById = (id) => {
    return (dispatch) => {
      
       
        const request = axios.get(`${URL}/?_id=${id}`)
            .then(resp => dispatch({ type: 'COMPETENCIABYID_SEARCHED', payload: resp.data }))
          

    }

}

export const add = (name, observacao) => {
    return dispatch => {
        
        axios.post(URL, { name, observacao })
        
            .then(resp => dispatch(clear()))
            .then(resp => dispatch(searchComp()))
            
    }
}

/*
*/
export const changeEdit = (competencia) => {
    return{
       type: 'ISEDITED_SEARCHED',
       payload: competencia
    }

    
}


export const edit = (isEdited,competencia, name, observacao ) => {
    return dispatch => {
        axios.put(`${URL}/${isEdited}`, { ...competencia, name, observacao })
            .then(resp => dispatch(clear()))
            .then(resp => dispatch(searchComp()))
            alert(isEdited);

    }
}


export const clear = () => {
    return [{ type: 'COMPETENCIA_CLEAR' }, searchComp()]
}
//--------------------------------------------------------------------------------------------------
export const markAsDone = (competencia) => {
    /*return dispatch => {
        axios.put(`${URL}/${competencia._id}`, { ...competencia, done: true })
            .then(resp => dispatch(search()))
    }*/
    return null
}



export const markAsPending = (competencia) => {
    /*return dispatch => {
        axios.put(`${URL}/${competencia._id}`, { ...competencia, done: false })
            .then(resp => dispatch(searchComp()))
    }*/
    return null
}

export const remove = (competencia) => {
   return dispatch => {
        axios.delete(`${URL}/${competencia._id}`)
            .then(resp => dispatch(searchComp()))
    }
    return null
}
