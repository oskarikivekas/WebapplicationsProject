/* Context manages authentication related stuff,
   if we want to change current user, we have to do it by actions which triggers reducer. 
   Actions and context are accessable globally which is handy
*/

import { createContext, useReducer, useEffect } from "react";
import Reducer from "./Reducer";

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    token: localStorage.getItem('auth_token') || null,
    fetching: false,
    error: false
};

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user));
    }, [state.user]);

    useEffect(() => {
        localStorage.setItem('auth_token', state.token); 
    }, [state.token])

    /* This contextprovider wraps the whole app in index.js  */
    return <Context.Provider 
            value={{
                user: state.user,
                token: state.token,
                fetching: state.fetching,
                error: state.error,
                dispatch,
            }}
            >
            {children}
            </Context.Provider>
}