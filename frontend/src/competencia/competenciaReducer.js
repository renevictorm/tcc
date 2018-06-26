const INITIAL_STATE = {
    name: '',
    observacao: '',
    isEdited: '',
    listById: [],
    list: []
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'NAME_CHANGED':
            return { ...state, name: action.payload }
        case 'OBSERVACAO_CHANGED':
            return { ...state, observacao: action.payload }
        case 'COMPETENCIA_SEARCHED':
            return { ...state, list: action.payload }
        case 'COMPETENCIABYID_SEARCHED':
            return { ...state, listById: action.payload }
        case 'COMPETENCIA_CLEAR':
            return {
                ...state, name: '', observacao: '', isEdited: ''
            }
        case 'ISEDITED_SEARCHED':
            return {
                ...state, isEdited: action.payload._id, name: action.payload.name
                , observacao: action.payload.observacao
            }


        default:
            return state
    }
}