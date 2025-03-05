import Wrapper from "../components/wrapper";
import AuthForm from "../components/AuthForm";
import { Link } from "react-router-dom";
import styles from "../styles/login.module.css";

const Login = () => {

    return (
        <Wrapper>
            <h1>Login</h1>
            <AuthForm isRegister={false} />
            <Link to="/register" className={styles['register-link']}>Don't have an account? Register here</Link>
        </Wrapper>
    );
}

export default Login;
