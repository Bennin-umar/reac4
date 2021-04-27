const userReducer = (state, action) => {
    switch   (action.type) {
        case "LOGIN_USER":
            return {
                ...state,
                user: action.payload,
                isloading: true
            }
            default:
                return state
    }
}
export default userReducer