const navigation = (state = "UserInfo", action) => {
    switch (action.type) {
        case 'NAVIGATE':
            return action.to;
        default:
            return state;
    }
};

export default navigation;