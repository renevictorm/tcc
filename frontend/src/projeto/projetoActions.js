import axios from 'axios'

const URL = 'http://localhost:3003/api/projetos'


export const changeNameProjeto = event => ({
    type: 'NAMEPROJETO_CHANGED',
    payload: event.target.value
})
export const changeCodigoProjeto = event => ({
    type: 'CODIGOPROJETO_CHANGED',
    payload: event.target.value
})
export const changeInicioProjeto = event => ({
    type: 'INICIOPROJETO_CHANGED',
    payload: event.target.value
})
export const changeSituacaoProjeto = event => ({
    type: 'SITUACAOPROJETO_CHANGED',
    payload: event.target.value
})
export const changeFimProjeto = event => ({
    type: 'FIMPROJETO_CHANGED',
    payload: event.target.value
})
export const changeFimEsperadoProjeto = event => ({
    type: 'FIMESPERADOPROJETO_CHANGED',
    payload: event.target.value
})
export const changeTipoProjeto = event => ({
    type: 'TIPOPROJETO_CHANGED',
    payload: event.target.value
})
export const changePrecoRealProjeto = event => ({
    type: 'PRECOREALPROJETO_CHANGED',
    payload: event.target.value
})
export const changePrecoEsperadoProjeto = event => ({
    type: 'PRECOESPERADOPROJETO_CHANGED',
    payload: event.target.value
})
export const changeDescricaoProjeto = event => ({
    type: 'DESCRICAOPROJETO_CHANGED',
    payload: event.target.value
})
export const changeGastosProjeto = event => ({
    type: 'GASTOSPROJETO_CHANGED',
    payload: event.target.value
})
export const changeChoiceProjeto = event => ({
    type: 'CHOICEPROJETO_CHANGED',
    payload: event.target.value
})


export const searchProjeto = (name) => {
    return (dispatch, getState) => {
        const name = getState().projeto.nameProjeto
        const search = name ? `&name__regex=/${name}/` : ''
        const request = axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => dispatch({ type: 'PROJETO_SEARCHED', payload: resp.data }))
    }
}

export const searchProjetoV = (name) => {
    return (dispatch, getState) => {
        const name = getState().projeto.nameProjeto
        const search = ''
        const request = axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => dispatch({ type: 'PROJETO_SEARCHED', payload: resp.data }))
    }
}

export const searchProjetoByCodigo = (name) => {
    return (dispatch, getState) => {
        const name = getState().projeto.nameProjeto
        const search = name ? `&codigo__regex=/${name}/` : ''
        const request = axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => dispatch({ type: 'PROJETO_SEARCHED', payload: resp.data }))
    }
}
export const addProjeto = (name, codigo, inicio, situacao, fim,fimEsperado, tipo, precoReal, precoEsperado,descricao,gastos) => {
    return dispatch => {
        
        alert(`${URL}/`)
        axios.post(URL, {name, codigo, inicio, situacao, fim,fimEsperado, tipo, precoReal, precoEsperado,descricao,gastos})
            .then(resp => dispatch(clearProjeto()))
            .then(resp => dispatch(searchProjeto()))
    }
}

export const changeEditProjeto = (projeto) => {
    return{
       type: 'ISEDITEDPROJETO_SEARCHED',
       payload: projeto
    }
}

export const editProjeto = (isEditedProjeto, projeto,name, codigo, inicio, situacao, fim,fimEsperado, tipo, precoReal, precoEsperado,descricao,gastos) => {
    return dispatch => {
        //Aqui deve ser os mesmos nomes dos que estão no banco de dados
        axios.put(`${URL}/${isEditedProjeto}`, { ...projeto,name, codigo, inicio, situacao, fim,fimEsperado, tipo, precoReal, precoEsperado,descricao,gastos})
            
            alert(`PROJETO ALTERADO`)
    }
}

export const clearProjeto = () => {
    return [{ type: 'PROJETO_CLEAR' }, searchProjeto()]
}
