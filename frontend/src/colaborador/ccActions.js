import axios from 'axios'

const URL2 = 'http://localhost:3003/api/colaboradorCompetencia'

export const addCC = (idColaborador, idCompetencia,nivel) => {
    return dispatch => {

        axios.post(URL2, { idColaborador, idCompetencia,nivel })
        .then(resp => dispatch(searchCC(idColaborador)))

            
    }
}

export const addCCnivel = (idColaborador, idCompetencia,nivel) => {
    return dispatch => {

        axios.post(`${URL2}/?idColaborador=${idColaborador}&idCompetencia=${idCompetencia}`, { idColaborador, idCompetencia,nivel })
        .then(resp => dispatch(searchCC(idColaborador)))

            
    }
}
export const changeNivel = event => ({
    type: 'NIVEL_CHANGED',
    payload: event.target.value
})
export const removeCC = (idColaborador, idCompetencia) => {
    return dispatch => {
        axios.delete(`${URL2}/?idColaborador=${idColaborador}&idCompetencia=${idCompetencia}`)
        .then(resp => dispatch(searchCC(idColaborador)))
            
    }
    return null
}

export const removeCCSsimples = (idCompetencia) => {
    return dispatch => {
        axios.delete(`${URL2}/?idCompetencia=${idCompetencia}`)
        
            
    }
    return null
}

export const searchCC = (idColaborador) => {
    return (dispatch, getState) => {
        
        
        const searchcc = idColaborador ? `&idColaborador__regex=/${idColaborador}/` : ''
        const request = axios.get(`${URL2}?sort=-createdAt${searchcc}`)
            .then(resp => dispatch({ type: 'CC_SEARCHED', payload: resp.data }))
            

    }

}

export const searchCCTotal = () => {
    return (dispatch) => {
        
        
        
        const request = axios.get(`${URL2}`)
            .then(resp => dispatch({ type: 'CC_SEARCHED', payload: resp.data }))
            

    }

}
export const changeCount = event => ({
    type: 'COUNTCC_CHANGED',
    payload: 3
})

export const clearCC = () => {
    return [{ type: 'CC_CLEAR' }]
}

