import React from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({children}) => {
    const {currentUser} = React.useContext(AuthContext);
    console.log(currentUser);
    return currentUser? children : <Navigate to='/login' />
}

export default ProtectedRoute