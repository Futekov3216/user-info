const initialState = {
    all_users: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USERS":
            return {
                ...state,
                all_users: action.payload
            }
        case "SET_USER_POSTS":
            return {
                ...state,
                all_users: [
                    ...state.all_users,
                ]
            }
        default:
            return state
    }
}
