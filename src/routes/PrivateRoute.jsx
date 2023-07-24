import { Navigate } from "react-router-dom";
import LoadingPage from "../pages/LoadingPage/LoadingPage";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    
console.log(loading);
    if(loading){
        return <LoadingPage></LoadingPage>
    }

    if (user) {
        return children;
    }
    else{
        return <Navigate to="/login"  replace></Navigate>
    }
};

export default PrivateRoute;