import React, { useContext } from 'react'
import { Contex } from '../ContexApi/Contex'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const {user} = useContext(Contex)
    const location = useLocation()

    if (user) {
        return children
    }
    return <Navigate to="/login" state={{ from: location.pathname }} />
}

export default PrivateRoute