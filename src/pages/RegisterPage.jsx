import Wrapper from "../components/wrapper";
import AuthForm from "../components/AuthForm";

const RegisterPage = () => {

    return (
        <Wrapper>
            <h1>Register</h1>
            <AuthForm isRegister={true} />
        </Wrapper>
    );
}

export default RegisterPage;