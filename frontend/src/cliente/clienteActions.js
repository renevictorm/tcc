import axios from 'axios'

const URL = 'http://localhost:3003/api/clientes'


export const changeNameCliente = event => ({
    type: 'NAMECLIENTE_CHANGED',
    payload: event.target.value
})
export const changeTelefoneCliente = event => ({
    type: 'TELEFONECLIENTE_CHANGED',
    payload: event.target.value
})
export const changePrefCliente = event => ({
    type: 'PREFCLIENTE_CHANGED',
    payload: event.target.value
})
export const changeCpfCliente = event => ({
    type: 'CPFCLIENTE_CHANGED',
    payload: event.target.value
})
export const changeCnpjCliente = event => ({
    type: 'CNPJCLIENTE_CHANGED',
    payload: event.target.value
})
export const changeEmailCliente = event => ({
    type: 'EMAILCLIENTE_CHANGED',
    payload: event.target.value
})
export const changeEnderecoCliente = event => ({
    type: 'ENDERECOCLIENTE_CHANGED',
    payload: event.target.value
})
export const changeIdentidadeCliente = event => ({
    type: 'IDENTIDADECLIENTE_CHANGED',
    payload: event.target.value
})
export const changeCaptacaoCliente = event => ({
    type: 'CAPTACAOCLIENTE_CHANGED',
    payload: event.target.value
})
export const changeEmpresaCliente = event => ({
    type: 'EMPRESACLIENTE_CHANGED',
    payload: event.target.value
})


export const searchCliente = (name) => {
    return (dispatch, getState) => {
        const name = getState().cliente.nameCliente
        const search = name ? `&name__regex=/${name}/` : ''
        const request = axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => dispatch({ type: 'CLIENTE_SEARCHED', payload: resp.data }))
    }
}

export const addCliente = (name, email, telefone, contatoPreferencial, identidade,cnpj, cpf, endereco, captacaoAtiva,empresa) => {
    return dispatch => {
        
        alert(`${URL}/`)
        axios.post(URL, {name, email, telefone, contatoPreferencial, identidade,cnpj, cpf, endereco, captacaoAtiva,empresa })
            .then(resp => dispatch(clearCliente()))
            .then(resp => dispatch(searchCliente()))
    }
}

export const changeEditCliente = (cliente) => {
    return{
       type: 'ISEDITEDCLIENTE_SEARCHED',
       payload: cliente
    }
}

export const editCliente = (isEditedCliente,cliente ,name, email, telefone, contatoPreferencial, identidade,cnpj, cpf, endereco, captacaoAtiva,empresa) => {
    return dispatch => {
        alert(`${URL}/${isEditedCliente}`)
        axios.put(`${URL}/${isEditedCliente}`, { ...cliente,name, email, telefone, contatoPreferencial, identidade,cnpj, cpf, endereco, captacaoAtiva,empresa})
            .then(resp => dispatch(clearCliente()))
            .then(resp => dispatch(searchCliente()))
            alert(isEditedCliente);
    }
}

export const clearCliente = () => {
    return [{ type: 'CLIENTE_CLEAR' }, searchCliente()]
}
