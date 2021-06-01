const initState = {
    users: [],
    isLoading: true
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'USERS':
            return {
                ...state,
                users: action.payload
            }
        default: return state;
    }
}

export default reducer;