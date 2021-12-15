import { createContext, useReducer, useEffect } from "react";
import Reducer from "./Reducer";

const INITIAL_STATE = {
    user: localStorage.getItem('auth_token') || null,
    fetching: false,
    error: false
};

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

    useEffect(() => {
         localStorage.setItem('auth_token', state.user);
        
        
    }, [state.user])

    return <Context.Provider 
            value={{
                user: state.user,
                fetching: state.fetching,
                error: state.error,
                dispatch,
            }}
            >
            {children}
            </Context.Provider>
}