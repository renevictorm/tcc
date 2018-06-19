
const lojaAtual = (state = null, action) => {
    switch(action.type) {
        case "SELECIONA_LOJA":
            return action.idLoja;
        case "SAIR_LOJA":
            return null;
        default:
            return state;
    }
}

export default lojaAtual;