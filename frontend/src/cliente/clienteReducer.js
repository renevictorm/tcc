const INITIAL_STATE = {
    name: '',
    email: '',
    telefone: '',
    pref: '',
    identidade: '',
    cnpj: '',
    cpf: '',
    endereco: '',
    capitacao: '',
    empresa: '',
    isEditedCliente: '',
    list: []
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'NAMECLIENTE_CHANGED':
            return { ...state, name: action.payload }
        case 'EMAILCLIENTE_CHANGED':
            return { ...state, email: action.payload }
        case 'TELEFONECLIENTE_CHANGED':
            return { ...state, telefone: action.payload }
        case 'PREFCLIENTE_CHANGED':
            return { ...state, pref: action.payload }
        case 'IDENTIDADECLIENTE_CHANGED':
            return { ...state, identidade: action.payload }
        case 'CNPJCLIENTE_CHANGED':
            return { ...state, cnpj: action.payload }



        case 'CPFCLIENTE_CHANGED':
            return { ...state, cpf: action.payload }
        case 'ENDERECOCLIENTE_CHANGED':
            return { ...state, endereco: action.payload }
        case 'CAPITACAOCLIENTE_CHANGED':
            return { ...state, capitacao: action.payload }
        case 'EMPRESACLIENTE_CHANGED':
            return { ...state, empresa: action.payload }
       

        

        case 'CLIENTE_SEARCHED':
            return { ...state, list: action.payload }

        //Quem vai ser editado====================================
        case 'ISEDITEDCLIENTE_SEARCHED':
            return {
                ...state, isEditedCliente: action.payload._id, name: action.payload.name
                , email: action.payload.email, telefone: action.payload.telefone, pref: action.payload.pref
                , identidade: action.payload.identidade, cnpj: action.payload.cnpj, cpf: action.payload.cpf
                , endereco: action.payload.endereco, capitacao: action.payload.capitacao, empresa: action.payload.empresa
               
            }
        //========================================================
        case 'CLIENTE_CLEAR':
            return {
                ...state,   name: '', email: '', telefone: '', pref: '', identidade: '', cnpj: '', cpf: '', endereco: '', capitacao: '', empresa: '',isEditedCliente:''
            }

        default:
            return state
    }
}