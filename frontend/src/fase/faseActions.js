import axios from 'axios'

const URL = 'http://localhost:3003/api/fases'


export const changeNameFase = event => ({
    type: 'NAMEFASE_CHANGED',
    payload: event.target.value
})

export const changeIdProjetoFase = event => ({
    type: 'IDPROJETOFASE_CHANGED',
    payload: event.target.value
})

export const changeInicioFase = event => ({
    type: 'INICIOFASE_CHANGED',
    payload: event.target.value
})

export const changeFimFase = event => ({
    type: 'FIMFASE_CHANGED',
    payload: event.target.value
})
export const changeFimEsperadoFase = event => ({
    type: 'FIMESPERADOFASE_CHANGED',
    payload: event.target.value
})

export const changeDescricaoFase = event => ({
    type: 'DESCRICAOFASE_CHANGED',
    payload: event.target.value
})



export const searchFase = (name) => {
    return (dispatch, getState) => {
        const name = getState().fase.nameFase
        const search = name ? `&name__regex=/${name}/` : ''
        const request = axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => dispatch({ type: 'FASE_SEARCHED', payload: resp.data }))
    }
}
export const searchFaseId = (idProjeto) => {
    return (dispatch, getState) => {
        
        
        const searchfase = idProjeto ? `&idProjeto__regex=/${idProjeto}/` : ''
        const request = axios.get(`${URL}?sort=-createdAt${searchfase}`)
            .then(resp => dispatch({ type: 'FASE_SEARCHED', payload: resp.data }))
            

    }

}

export const addFase = (name, idProjeto, inicio, fim, fimEsperado,descricao) => {
    return dispatch => {
        
        alert(idProjeto)
        axios.post(URL, {name, idProjeto, inicio, fim, fimEsperado,descricao})
            .then(resp => dispatch(clearFase()))
            .then(resp => dispatch(searchFase()))
    }
}

export const changeEditFase = (fase) => {
    return{
       type: 'ISEDITEDFASE_SEARCHED',
       payload: fase
    }
}

export const editFase = (isEditedFase, fase,name, idProjeto, inicio, fim, fimEsperado,descricao) => {
    return dispatch => {
        alert(`FASE ALTERADA`)
        //Aqui deve ser os mesmos nomes dos que estão no banco de dados
        axios.put(`${URL}/${isEditedFase}`, { ...fase,name, idProjeto, inicio, fim, fimEsperado,descricao})
            
            
    }
}

export const clearFase = () => {
    return [{ type: 'FASE_CLEAR' }, searchFase()]
}


export const changeCountFase = event => ({
    type: 'COUNTFASE_CHANGED',
    payload: 3
})
