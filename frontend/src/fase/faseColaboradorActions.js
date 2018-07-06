import axios from 'axios'

const URL2 = 'http://localhost:3003/api/faseColaborador'

export const addFC = (idFase, idColaborador) => {
    return dispatch => {
        
        axios.post(URL2, { idFase, idColaborador})
        .then(resp => dispatch(searchFC(idFase)))

            
    }
}


export const removeFC = (idFase, idColaborador) => {
    return dispatch => {
        axios.delete(`${URL2}/?idFase=${idFase}&idColaborador=${idColaborador}`)
        .then(resp => dispatch(searchFC(idFase)))
            
    }
    return null
}

export const removeFCSsimples = (idColaborador) => {
    return dispatch => {
        axios.delete(`${URL2}/?idColaborador=${idColaborador}`)
        
            
    }
    return null
}

export const searchFC = (idFase) => {
    return (dispatch, getState) => {
        
        
        const searchfc = idFase ? `&idFase__regex=/${idFase}/` : ''
        const request = axios.get(`${URL2}?sort=-createdAt${searchfc}`)
            .then(resp => dispatch({ type: 'FC_SEARCHED', payload: resp.data }))
            

    }

}

export const searchFCTotal = () => {
    return (dispatch) => {
        
        
        
        const request = axios.get(`${URL2}`)
            .then(resp => dispatch({ type: 'FC_SEARCHED', payload: resp.data }))
            

    }

}
export const changeCountFC = event => ({
    type: 'COUNTFC_CHANGED',
    payload: 3
})

export const clearFC = () => {
    return [{ type: 'FC_CLEAR' }]
}

