import axios from 'axios'

const URL = 'http://localhost:3003/api/colaboradores'


export const changeName = event => ({
    type: 'NAME_CHANGED',
    payload: event.target.value
})
export const changeTipoUsuario = event => ({
    type: 'TIPOUSUARIO_CHANGED',
    payload: event.target.value
})
export const changeMatricula = event => ({
    type: 'MATRICULA_CHANGED',
    payload: event.target.value
})

export const changeCpf = event => ({
    type: 'CPF_CHANGED',
    payload: event.target.value
})
export const changeEmail = event => ({
    type: 'EMAIL_CHANGED',
    payload: event.target.value
})
export const changeEmailAlternative = event => ({
    type: 'EMAILALTERNATIVE_CHANGED',
    payload: event.target.value
})
export const changeEndereco = event => ({
    type: 'ENDERECO_CHANGED',
    payload: event.target.value
})
export const changeIdentidade = event => ({
    type: 'IDENTIDADE_CHANGED',
    payload: event.target.value
})
export const changeCargo = event => ({
    type: 'CARGO_CHANGED',
    payload: event.target.value
})
export const changeLogin = event => ({
    type: 'LOGIN_CHANGED',
    payload: event.target.value
})
export const changeSenha = event => ({
    type: 'SENHA_CHANGED',
    payload: event.target.value
})

export const changeDataNascimento = event => ({
    type: 'DN_CHANGED',
    payload: event.target.value
})
export const changeDataEntrada = event => ({
    type: 'DE_CHANGED',
    payload: event.target.value
})
export const changeDataSaida = event => ({
    type: 'DS_CHANGED',
    payload: event.target.value
})
export const changeCamisa = event => ({
    type: 'CAMISA_CHANGED',
    payload: event.target.value
})
export const changeStatus = event => ({
    type: 'STATUS_CHANGED',
    payload: event.target.value
})

export const search = (name) => {
    return (dispatch, getState) => {
        const name = getState().colaborador.name
        const search = name ? `&name__regex=/${name}/` : ''
        const request = axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => dispatch({ type: 'COLABORADOR_SEARCHED', payload: resp.data }))

    }

}

export const add = (name, tipoUsuario, matricula, cpf, email, emailAlternative, endereco,
    identidade, cargo, login, senha, dataNascimento, dataEntrada, dataSaida, camisa, status ) => {
    return dispatch => {
        axios.post(URL, {
            name, tipoUsuario, matricula, email, emailAlternative, cpf, endereco, identidade, cargo,
            login, senha, dataNascimento, dataEntrada, dataSaida, camisa, status 
        })
            .then(resp => dispatch(clear()))
            .then(resp => dispatch(search()))
    }
}

export const clear = () => {
    return [{ type: 'COLABORADOR_CLEAR' }, search()]
}

