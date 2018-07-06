const INITIAL_STATE = {
    textoPost: '',

    dataPost: new Date,

    idColaboradorPost: '',
    idFasePost: '',
    sEditedPost: '',
    nameColaboradorFase: '',
    countPost: 1,
    listPost: []
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TEXTOPOST_CHANGED':
            return { ...state, textoPost: action.payload }
        case 'DATAPOST_CHANGED':
            return { ...state, dataPost: action.payload }
        case 'IDCOLABORADORPOST_CHANGED':
            return { ...state, idColaboradorPost: action.payload }
        case 'NOMECOLABORADORPOST_CHANGED':
            return { ...state, nameColaboradorPost: action.payload }
        case 'IDFASEPOST_CHANGED':
            return { ...state, idFasePost: action.payload }
        case 'COUNTPOST_CHANGED':
            return { ...state, countPost: 3 }
        case 'POST_SEARCHED':
            return { ...state, listPost: action.payload }

        //Quem vai ser editado====================================
        case 'ISEDITEDPOST_SEARCHED':
            return {
                ...state, isEditedPost: action.payload._id, textoPost: action.payload.texto
                , dataPost: action.payload.data, idColaboradorPost: action.payload.idColaborador,
                idFasePost: action.payload.idFase,nameColaboradorPost: action.payload.nameColaborador
            }
        //========================================================
        case 'POST_CLEAR':
            return {
                ...state, textoPost: '', dataPost: new Date, idColaboradorPost: '', nameColaboradorPost: '',idFasePost: '', isEditedPost: '', countPost: 1
            }

        default:
            return state
    }
}