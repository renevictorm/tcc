const INITIAL_STATE = {
    idFase: '',
    idColaborador: '',
    countfc: 1,
    listfc: []
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case 'FC_SEARCHED':
            return { ...state, listfc: action.payload }
        

        case 'FC_CLEAR':
            return {
                ...state, idFase: '', idColaborador: '', countfc: 1
            }
        case 'COUNTFC_CHANGED':
            return { ...state, countfc: 3 }

        default:
            return state
    }
}