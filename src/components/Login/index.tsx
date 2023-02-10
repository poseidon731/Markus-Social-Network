import React, { useState } from "react";
import { 
    FormButtomContainer,
    FormButton,
    FormContainer,
    FormFooterInfo,
    FormHeadline,
    FormHeadlineDescription,
    FormLogin, 
    Label, 
    LoginContainer, 
    LoginRemember, 
    PasswordInput, 
    PasswordInputContainer, 
    UserNameInput, 
    UserNameInputContainer
} from "./styles";
import { Link, useNavigate } from "react-router-dom";

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import { IoClose } from "react-icons/io5";

type LoginProps = {
    closeModal: () => void
}

const Login = ({closeModal}: LoginProps) => {

    const [ showPassword, setShowPassword] = useState(false);

    const [ name, setName ] = useState("");
    const [ password, setPassword ] = useState("");

    const navigate = useNavigate();

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }    

    const handleLogin = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        if(name !== "" && password !== "") {
            closeModal()
            navigate("/")
        } else {
            alert("Preencha os dados corretamente!")
        }
    }    

    return (
        <LoginContainer>
            <div className="close">
                <IoClose size={36} onClick={closeModal} />
            </div>
            <FormLogin>
                <FormHeadline>
                    <FormHeadlineDescription fontSize="1.4rem">
                        Faça login na sua conta
                    </FormHeadlineDescription>
                </FormHeadline>
                <FormContainer>
                    <form>
                        <UserNameInputContainer inputBoxWidth="100%">
                            <Label htmlFor="username">
                                <UserNameInput 
                                    type="text"
                                    name="username"
                                    id="username" 
                                    placeholder="Usuário" 
                                    inputWidth="100%" 
                                    autoComplete="none"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                                    value={name}
                                />
                            </Label>
                        </UserNameInputContainer>
                        <PasswordInputContainer inputWidth="100%">
                            <Label htmlFor="user-password">
                                <PasswordInput 
                                    type={showPassword ? "text" : "password"} 
                                    name="user-password" id="user-password" 
                                    placeholder="Senha" 
                                    inputWidth="100%" 
                                    autoComplete="none"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                                    value={password}
                                />
                                {showPassword 
                                ? <VisibilityOffIcon className="visibility-password-icon-login" onClick={handleShowPassword} /> 
                                :  <VisibilityIcon className="visibility-password-icon-login" onClick={handleShowPassword} />}
                            </Label>
                        </PasswordInputContainer>
                        <LoginRemember>
                            <div className="remember-credentials">
                                <Label htmlFor="remember-password">
                                <input type="checkbox" name="remember-password" id="remember-password" /> Lembrar
                                <span className="checkmark"></span>
                                </Label>
                            </div>
                            <div className="forgot-password">
                                <Link to="/redefinir-senha" onClick={closeModal}>Esqueci minha senha</Link>
                            </div>
                        </LoginRemember>
                        <FormButtomContainer>
                            <FormButton 
                                type="submit" 
                                value="Login"
                                backgroundButton="var(--main-color)"
                                onClick={handleLogin}
                            />
                        </FormButtomContainer>
                    </form>
                </FormContainer>
                <FormFooterInfo>
                    <p>Não tem uma conta? <span><Link to="/signup" onClick={closeModal}>Inscreva-se</Link></span></p>
                </FormFooterInfo>
            </FormLogin>
        </LoginContainer>
    )
}

export default Login;