const INITIAL_STATE = {
    tipoUsuario: '',
    name: '',
    matricula: '',
    cpf: '',
    email: '',
    emailAlternative: '',
    endereco: '',
    identidade: '',
    cargo: '',
    login: '',
    senha: '',
    dataNascimento: new Date,
    dataEntrada: '',
    dataSaida: '',
    camisa: '',
    status: '',
    isEdited: '',
    idColaborador: '',
    idCompetencia: '',
    list: []
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'NAME_CHANGED':
            return { ...state, name: action.payload }
        case 'TIPOUSUARIO_CHANGED':
            return { ...state, tipoUsuario: action.payload }
        case 'MATRICULA_CHANGED':
            return { ...state, matricula: action.payload }
        case 'CPF_CHANGED':
            return { ...state, cpf: action.payload }
        case 'EMAIL_CHANGED':
            return { ...state, email: action.payload }
        case 'EMAILALTERNATIVE_CHANGED':
            return { ...state, emailAlternative: action.payload }



        case 'ENDERECO_CHANGED':
            return { ...state, endereco: action.payload }
        case 'IDENTIDADE_CHANGED':
            return { ...state, identidade: action.payload }
        case 'CARGO_CHANGED':
            return { ...state, cargo: action.payload }
        case 'LOGIN_CHANGED':
            return { ...state, login: action.payload }
        case 'SENHA_CHANGED':
            return { ...state, senha: action.payload }
        case 'DN_CHANGED':
            return { ...state, dataNascimento: action.payload }
        case 'DE_CHANGED':
            return { ...state, dataEntrada: action.payload }
        case 'DS_CHANGED':
            return { ...state, dataSaida: action.payload }
      

        case 'CAMISA_CHANGED':
            return { ...state, camisa: action.payload }
        case 'STATUS_CHANGED':
            return { ...state, status: action.payload }


        case 'COLABORADOR_SEARCHED':
            return { ...state, list: action.payload }

        //Quem vai ser editado====================================
        case 'ISEDITED_COLA_SEARCHED':
            return {
                ...state, isEdited: action.payload._id, name: action.payload.name
                , tipoUsuario: action.payload.tipoUsuario, matricula: action.payload.matricula, identidade: action.payload.identidade
                , dataEntrada: action.payload.dataEntrada, dataNascimento: action.payload.dataNascimento, dataSaida: action.payload.dataSaida
                , login: action.payload.login, senha: action.payload.senha, status: action.payload.status
                , camisa: action.payload.camisa, endereco: action.payload.endereco, email: action.payload.email,
                emailAlternative: action.payload.emailAlternative, cpf: action.payload.cpf, cargo: action.payload.cargo
            }
        //========================================================
        case 'COLABORADOR_CLEAR':
            return {
                ...state, name: '', matricula: '', cpf: '', email: '', emailAlternative: '', endereco: '', identidade: '',
                cargo: '', login: '', senha: '', dataNascimento: '', dataEntrada: '', dataSaida: '', camisa: '', status: '',
                isEdited: '', idColaborador: '', idCompetencia: ''
            }

        default:
            return state
    }
}