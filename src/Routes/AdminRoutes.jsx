import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";

const AdminRoutes = ({ children }) => {
    const { user, isLoading, logOut } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (isLoading) {
        return <div className="flex flex-col items-center justify-center">
            <span className="loading loading-bars loading-lg text-center"></span>
        </div>
    }
    if (user && isAdmin) {
        return children;
    }
    // Log out the user and redirect to the login page
    const handleLogout = () => {
        logOut(); // Assuming you have a logout function in your authentication logic
    };
    // return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    return (
        <>
            {handleLogout()}
            <Navigate to="/login" state={{ from: location }} replace></Navigate>
        </>
    );
};

export default AdminRoutes;