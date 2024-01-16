import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoutes = ({children}) => {
    const {user,isLoading} = useAuth();
    const location = useLocation();

    if(isLoading){
        return <div className="flex flex-col items-center justify-center">
            <span className="loading loading-ring loading-lg text-center"></span>
        </div>
    }

    if(user){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>

};

export default PrivateRoutes;