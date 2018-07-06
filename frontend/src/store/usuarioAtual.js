const usuarioAtual = (state = {
    username: "Renê",
    password: "Teste",
    name: "Renê Milagres",
    tipoUsuario: 1,
    matricula: "79789",
    email: "renevictorm@gmail.com",
    emailAlternative: "rsscarecrow@hotmail.com",
    cpf: "105.712.286-66",
    endereco: "Rua Geninho Lentine  210, Centro, Viçosa - MG CEP:36270-000",
    identidade: "MG-17.148-555",
    cargo: "Presidente",
    login: "renevictorm",
    senha: "123",
    dataNascimento: "1992-01-28T00:00:00.000Z",
    dataEntrada: "2015-05-25T00:00:00.000Z",
    dataSaida: "2018-07-31T00:00:00.000Z",
    camisa: "GG", 
    status: "EFETIVO",
    id:'5b2ad3b4cb654e445cbaa924'
}, action) => {
    switch (action.type) {
        case 'LOGIN_SUCESS':
            return action;
        case 'LOGOUT':
            return null;
        default:
            return state;
    }
};

export default usuarioAtual;