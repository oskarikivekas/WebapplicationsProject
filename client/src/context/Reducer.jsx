const Reducer = (state, action) => {
    switch(action.type) {
        case "START_LOGIN":
            return {
                user: null,
                fetching: true,
                error: false,
            }
       
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                fetching: false,
                error: false,
            }
      
        case "LOGIN_FAILED":
            return {
                user: null,
                fetching: false,
                error: true,
            }
        case "LOGOUT":
            return {
                user: null,
                fetching: false,
                error: false,
            }
        default: 
            return state;

    };
}
export default Reducer;