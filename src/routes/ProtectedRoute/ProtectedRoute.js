import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';
import {Navigate, useLocation} from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()
    if(loading){
        return <p className='text-center text-2xl text-[var(--primary)] mt-20'>Loading...</p>
    }
    if(user?.uid){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace/>
};

export default ProtectedRoute;