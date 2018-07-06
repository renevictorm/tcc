const INITIAL_STATE = {
    nameArquivo: '',
    fileArquivo: null,
    listArquivo: []
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ARQUIVONAME_CHANGED':
            return { ...state, nameArquivo: action.payload }
        case 'ARQUIVOFILE_CHANGED':
            return { ...state, fileArquivo: action.payload }



        case 'ARQUIVO_SEARCHED':
            return { ...state, listArquivo: action.payload }

       
        case 'ARQUIVO_CLEAR':
            return {
                ...state, nameArquivo: '', fileArquivo: null
            }

        default:
            return state
    }
}