/* Reducer changes the state of context */
const Reducer = (state, action) => {
    switch(action.type) {
        case "START_LOGIN":
            return {
                user: null,
                token: null,
                fetching: true,
                error: false,
            }
       
        case "LOGIN_SUCCESS":
            return {
                user: action.payload.user,
                token: action.payload.token,
                fetching: false,
                error: false,
            }
      
        case "LOGIN_FAILED":
            return {
                user: null,
                token: null,
                fetching: false,
                error: true,
            }
        case "LOGOUT":
            return {
                user: null,
                token: null,
                fetching: false,
                error: false,
            }
        default: 
            return state;

    };
}
export default Reducer;