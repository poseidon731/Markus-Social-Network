import React, { useState } from "react";
import { 
  DescriptionResetPassword, 
  ResetPasswordContainer, 
  ResetPasswordForm, 
  ResetPasswordFormContainer
} from "./styles";
import { Legend } from "../Signup/styles";
import Logo from "../../components/Logo";
import { 
  FormButtomContainer, 
  FormButton, 
  FormHeadline, 
  FormHeadlineDescription, 
  UserNameInput, 
  UserNameInputContainer 
} from "../../components/Login/styles";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {

  const [ email, setEmail ] = useState("");

  const navigate = useNavigate();

  const handleInputReset = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const resetPasswordMessage = () => {
    if(email !== "") {
      let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      
      if(!regex.test(email)) {
        alert("E-mail digitado não é válido")
      } else {
        alert("Foi enviado no seu e-mail, o link para redefinir sua senha.")
        navigate("/")
      }
    }
  }
  

  return (
    <ResetPasswordContainer>
      <Logo />
      <ResetPasswordForm>
        <FormHeadline>
          <FormHeadlineDescription fontSize="2rem">
            Esqueceu sua senha?
          </FormHeadlineDescription>
        </FormHeadline>
        <DescriptionResetPassword>
          <span>Digite seu endereço de e-mail e nós enviaremos um link para que você possa usar para escolher uma nova senha.</span>
        </DescriptionResetPassword>
        <ResetPasswordFormContainer>
          <form>
            <UserNameInputContainer>
            <Legend fontSizeLegend="1.4rem">E-mail</Legend>
              <UserNameInput 
                type="email"
                name="email"
                id="email"
                inputWidth="100%"
                required
                onChange={handleInputReset}
                value={email}
              />
            </UserNameInputContainer>
            <FormButtomContainer>
              <FormButton 
                type="submit" 
                value="Redefinir Senha"
                backgroundButton="var(--ligth-blue)"
                onClick={resetPasswordMessage}
              />
            </FormButtomContainer>
          </form>
        </ResetPasswordFormContainer>
      </ResetPasswordForm>
    </ResetPasswordContainer>
  )
}

export default ResetPassword;