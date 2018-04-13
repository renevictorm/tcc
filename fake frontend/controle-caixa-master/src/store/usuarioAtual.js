const usuarioAtual = (state = {
    username: "Renê",
    password: "Teste",
    lojas: [{ nome: "Banana1", id: 2 }, { nome: "Banana2", id: 3 }, { nome: "Banana2", id: 4 }]
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