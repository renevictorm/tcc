const INITIAL_STATE = {
    nameCliente: '',
    emailCliente: '',
    telefoneCliente: '',
    prefCliente: '',
    identidadeCliente: '',
    cnpjCliente: '',
    cpfCliente: '',
    enderecoCliente: '',
    capitacaoCliente: false,
    empresaCliente: '',
    isEditedCliente: '',
    listCliente: []
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'NAMECLIENTE_CHANGED':
            return { ...state, nameCliente: action.payload }
        case 'EMAILCLIENTE_CHANGED':
            return { ...state, emailCliente: action.payload }
        case 'TELEFONECLIENTE_CHANGED':
            return { ...state, telefoneCliente: action.payload }
        case 'PREFCLIENTE_CHANGED':
            return { ...state, prefCliente: action.payload }
        case 'IDENTIDADECLIENTE_CHANGED':
            return { ...state, identidadeCliente: action.payload }
        case 'CNPJCLIENTE_CHANGED':
            return { ...state, cnpjCliente: action.payload }



        case 'CPFCLIENTE_CHANGED':
            return { ...state, cpfCliente: action.payload }
        case 'ENDERECOCLIENTE_CHANGED':
            return { ...state, enderecoCliente: action.payload }
        case 'CAPITACAOCLIENTE_CHANGED':
            return { ...state, capitacaoCliente: action.payload }
        case 'EMPRESACLIENTE_CHANGED':
            return { ...state, empresaCliente: action.payload }
       

        

        case 'CLIENTE_SEARCHED':
            return { ...state, listCliente: action.payload }

        //Quem vai ser editado====================================
        case 'ISEDITEDCLIENTE_SEARCHED':
            return {
                ...state, isEditedCliente: action.payload._id, nameCliente: action.payload.name
                , emailCliente: action.payload.email, telefoneCliente: action.payload.telefone, prefCliente: action.payload.contatoPreferencial
                , identidadeCliente: action.payload.identidade, cnpjCliente: action.payload.cnpj, cpfCliente: action.payload.cpf
                , enderecoCliente: action.payload.endereco, capitacaoCliente: action.payload.capitacaoAtiva, empresaCliente: action.payload.empresa
               
            }
        //========================================================
        case 'CLIENTE_CLEAR':
            return {
                ...state,   nameCliente: '', emailCliente: '', telefoneCliente: '', prefCliente: '', identidadeCliente: '', cnpjCliente: '', cpfCliente: '', enderecoCliente: '', capitacaoCliente: false, empresaCliente: '',isEditedCliente:''
            }

        default:
            return state
    }
}