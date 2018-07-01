const INITIAL_STATE = {
    idProjeto: '',
    responsavel: 1,
    idCliente: '',
    count: 1,
    list: []
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case 'PC_SEARCHED':
            return { ...state, list: action.payload }
        case 'RESPONSAVEL_CHANGED':
            return { ...state, responsavel: action.payload }

        case 'PC_CLEAR':
            return {
                ...state, idProjeto: '', idCliente: '', count: 1
            }
        case 'COUNTPC_CHANGED':
            return { ...state, count: 3, responsavel: 1 }

        default:
            return state
    }
}