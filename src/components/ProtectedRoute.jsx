
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const { isLogin } = useContext(AuthContext);
    return isLogin ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
