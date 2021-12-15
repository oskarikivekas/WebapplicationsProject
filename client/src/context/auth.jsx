/* import * as React from "react";
import axios from "axios";

const authContext = React.createContext();

/* useAuth is a hook to determine user auth status */
/* Could be extended for server side session management, but for now this will do as demonstration*/

/* const {authed, logout, login} = useAuth(), returns boolean or sets the boolean state *//*
const useAuth = () => {
    const [authed, setAuthed] = React.useState(false);

    return {
    authed,     
        login() {
             try {
                const res = await axios.post("/api/auth/login", {
                    username, password
                })
                console.log(res.data);
                if(res.data.token) {
                    localStorage.setItem('auth_token', res.data.token);
                    setAuthed(true);
                    return authed
                }
            } catch (err) {
                    console.log(err);
                } 
                return new Promise((res) => {
                    setAuthed(true);
                    res();
                  });
        },
        logout() {
            localStorage.removeItem('auth_token');
            setAuthed(false);
        }     
    }
}   

export function AuthProvider({ children }) {
    const auth = useAuth();
  
    return (
      <authContext.Provider value={auth}>
        {children}
      </authContext.Provider>
    );
  }
  
  export default function AuthConsumer() {
    return React.useContext(authContext);
  }


 */
