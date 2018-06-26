const INITIAL_STATE = {
    idColaborador: '',
    nivel: 1,
    idCompetencia: '',
    count: 1,
    list: []
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case 'CC_SEARCHED':
            return { ...state, list: action.payload }
        case 'NIVEL_CHANGED':
            return { ...state, nivel: action.payload }

        case 'CC_CLEAR':
            return {
                ...state, idColaborador: '', idCompetencia: '', count: 1
            }
        case 'COUNTCC_CHANGED':
            return { ...state, count: 3, nivel: 1 }

        default:
            return state
    }
}