import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/ContextProvider';
import UseAdmin from '../../Hooks/UseAdmin';
import SmallSpinner from '../../Pages/Shared/Spinner/SmallSpinner';




const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = UseAdmin(user?.email);
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <SmallSpinner></SmallSpinner>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;