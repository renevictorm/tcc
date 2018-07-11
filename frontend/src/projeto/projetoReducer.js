const INITIAL_STATE = {
    nameProjeto: '',
    codigoProjeto: '',
    inicioProjeto: new Date,
    situacaoProjeto: 'Analisando',
    fimProjeto: new Date,
    fimEsperadoProjeto: new Date,
    tipoProjeto: 'Tipo Não Definido',
    precoRealProjeto: 0,
    precoEsperadoProjeto: 0,
    descricaoProjeto: '',
    gastosProjeto: 0,
    isEditedProjeto: '',
    choiceProjeto: '',
    listProjeto: []
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'NAMEPROJETO_CHANGED':
            return { ...state, nameProjeto: action.payload }
        case 'CODIGOPROJETO_CHANGED':
            return { ...state, codigoProjeto: action.payload }
        case 'INICIOPROJETO_CHANGED':
            return { ...state, inicioProjeto: action.payload }
        case 'SITUACAOPROJETO_CHANGED':
            return { ...state, situacaoProjeto: action.payload }
        case 'FIMPROJETO_CHANGED':
            return { ...state, fimProjeto: action.payload }
        case 'FIMESPERADOPROJETO_CHANGED':
            return { ...state, fimEsperadoProjeto: action.payload }
        case 'TIPOPROJETO_CHANGED':
            return { ...state, tipoProjeto: action.payload }
        case 'PRECOREALPROJETO_CHANGED':
            return { ...state, precoRealProjeto: action.payload }
        case 'PRECOESPERADOPROJETO_CHANGED':
            return { ...state, precoEsperadoProjeto: action.payload }
        case 'DESCRICAOPROJETO_CHANGED':
            return { ...state, descricaoProjeto: action.payload }
        case 'GASTOSPROJETO_CHANGED':
            return { ...state, gastosProjeto: action.payload }
        case 'CHOICEPROJETO_CHANGED':
            return { ...state, choiceProjeto: action.payload }




        case 'PROJETO_SEARCHED':
            return { ...state, listProjeto: action.payload }

        //Quem vai ser editado====================================
        case 'ISEDITEDPROJETO_SEARCHED':
            return {
                ...state, isEditedProjeto: action.payload._id, nameProjeto: action.payload.name
                , codigoProjeto: action.payload.codigo, inicioProjeto: action.payload.inicio, situacaoProjeto: action.payload.situacao
                , fimProjeto: action.payload.fim, fimEsperadoProjeto: action.payload.fimEsperado, tipoProjeto: action.payload.tipo
                , precoRealProjeto: action.payload.precoReal, precoEsperadoProjeto: action.payload.precoEsperado, descricaoProjeto: action.payload.descricao, gastosProjeto: action.payload.gastos

            }
        //========================================================
        case 'PROJETO_CLEAR':
            return {
                ...state, nameProjeto: '', codigoProjeto: '', inicioProjeto: new Date, situacaoProjeto: 'Analisando', fimProjeto: new Date,
                fimEsperadoProjeto: new Date, tipoProjeto: 'Tipo Não Definido', precoRealProjeto: 0, precoEsperadoProjeto: 0, descricaoProjeto: '',
                gastosProjeto: 0, isEditedProjeto: ''
            }

        default:
            return state
    }
}