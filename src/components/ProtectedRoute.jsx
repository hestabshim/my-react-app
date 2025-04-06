
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
    const isLogin = useSelector((state) => state.auth.isLogin);
    return isLogin ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
