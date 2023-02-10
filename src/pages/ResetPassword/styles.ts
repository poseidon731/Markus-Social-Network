import styled from "styled-components";
import { 
  FormContainer,
  FormLogin,
  LoginContainer 
} from "../../components/Login/styles";

export const ResetPasswordContainer = styled(LoginContainer)`
  margin: 15rem 0;

  @media (max-width: 768px){
    margin: 10rem 0;
  }
`;

export const ResetPasswordFormContainer = styled(FormContainer)`
  padding: 0 2.5rem 2.5rem;
`

export const ResetPasswordForm = styled(FormLogin)`
  max-width: 50rem;
`;

export const DescriptionResetPassword = styled.div`
  padding: 2rem 2.5rem;
  display: flex;

  span {
    font-size: 1.4rem;
    line-height: 2;
    color: var(--title-color);
  }
`;