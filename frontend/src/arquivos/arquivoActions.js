import axios from 'axios'

const URL = 'http://localhost:3003/api/arquivo'


export const changeNameArquivo = event => ({
    type: 'ARQUIVONAME_CHANGED',
    payload: event.target.value
})

export const changeFileArquivo = (fila)=>({
    type: 'ARQUIVOFILE_CHANGED',
   
    payload: fila
 
})


export const searchArquivo = (name) => {
    return (dispatch, getState) => {
        const name = getState().arquivo.nameArquivo
        const search = name ? `&name__regex=/${name}/` : ''
        const request = axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => dispatch({ type: 'ARQUIVO_SEARCHED', payload: resp.data }))
    }
}


export const addArquivo = (name, file) => {
    return dispatch => {
        
        alert(`${URL}/`)
        axios.post(URL, {name,file})
            .then(resp => dispatch(clearArquivo()))
            .then(resp => dispatch(searchArquivo()))
    }
}


export const clearArquivo = () => {
    return [{ type: 'ARQUIVO_CLEAR' }, searchArquivo()]
}
