import { Navigate, useLocation } from 'react-router-dom'
import {Context} from './Context'
import { useContext } from 'react'
const ProtectedRoutes = ({children}) => {
    const location = useLocation();
    const {user} = useContext(Context);
    return (
        /* State prop redirecting sometimes not working as intended, fix later, page refresh helps for now */
       user ? children : <Navigate to="/login" replace state={{path: location.pathname}}/>
    )
}

export default ProtectedRoutes
