import axios from 'axios'

const URL2 = 'http://localhost:3003/api/projetoCliente'

export const addPC = (idProjeto, idCliente,responsavel) => {
    return dispatch => {
        alert(responsavel)
        axios.post(URL2, { idProjeto, idCliente, responsavel })
        .then(resp => dispatch(searchPC(idProjeto)))

            
    }
}

export const addPCresponsavel = (idProjeto, idCliente,responsavel) => {
    return dispatch => {

        axios.post(`${URL2}/?idProjeto=${idProjeto}&idCliente=${idCliente}`, { idProjeto, idCliente,responsavel })
        .then(resp => dispatch(searchPC(idProjeto)))

            
    }
}
export const changeResponsavel = event => ({
    type: 'RESPONSAVEL_CHANGED',
    payload: event.target.value
})
export const removePC = (idProjeto, idCliente) => {
    return dispatch => {
        axios.delete(`${URL2}/?idProjeto=${idProjeto}&idCliente=${idCliente}`)
        .then(resp => dispatch(searchPC(idProjeto)))
            
    }
    return null
}

export const removePCSsimples = (idCliente) => {
    return dispatch => {
        axios.delete(`${URL2}/?idCliente=${idCliente}`)
        
            
    }
    return null
}

export const searchPC = (idProjeto) => {
    return (dispatch, getState) => {
        
        
        const searchcc = idProjeto ? `&idProjeto__regex=/${idProjeto}/` : ''
        const request = axios.get(`${URL2}?sort=-createdAt${searchcc}`)
            .then(resp => dispatch({ type: 'PC_SEARCHED', payload: resp.data }))
            

    }

}

export const searchPCTotal = () => {
    return (dispatch) => {
        
        
        
        const request = axios.get(`${URL2}`)
            .then(resp => dispatch({ type: 'PC_SEARCHED', payload: resp.data }))
            

    }

}
export const changeCount = event => ({
    type: 'COUNTPC_CHANGED',
    payload: 3
})

export const clearPC = () => {
    return [{ type: 'PC_CLEAR' }]
}

