const INITIAL_STATE = {
    nameFase: '',
    idProjetoFase: '',
    inicioFase: new Date,
    fimFase: new Date,
    fimEsperadoFase: new Date,
    descricaoFase: '',
    isEditedFase: '',
    countFase: 1,
    listFase: []
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'NAMEFASE_CHANGED':
            return { ...state, nameFase: action.payload }
        case 'IDPROJETOFASE_CHANGED':
            return { ...state, idProjetoFase: action.payload }
        case 'INICIOFASE_CHANGED':
            return { ...state, inicioFase: action.payload }
        case 'DESCRICAOFASE_CHANGED':
            return { ...state, descricaoFase: action.payload }
        case 'FIMFASE_CHANGED':
            return { ...state, fimFase: action.payload }
        case 'FIMESPERADOFASE_CHANGED':
            return { ...state, fimEsperadoFase: action.payload }

        case 'COUNTFASE_CHANGED':
            return { ...state, countFase: 3 }



        case 'FASE_SEARCHED':
            return { ...state, listFase: action.payload }

        //Quem vai ser editado====================================
        case 'ISEDITEDFASE_SEARCHED':
            return {
                ...state, isEditedFase: action.payload._id, nameFase: action.payload.name
                , idProjetoFase: action.payload.idProjetoFase, inicioFase: action.payload.inicio, fimFase: action.payload.fim
                , fimEsperadoFase: action.payload.fimEsperado, descricaoFase: action.payload.descricao
            }
        //========================================================
        case 'FASE_CLEAR':
            return {
                ...state, nameFase: '', idProjetoFase: '', inicioFase: new Date, fimFase: new Date, fimEsperadoFase: new Date,
                descricaoFase: '', isEditedFase: '', countFase: 1
            }

        default:
            return state
    }
}