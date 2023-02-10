import styled from "styled-components";

type LoginHtmlAttributes = {
    fontSize?: string,
    inputBoxWidth?: string,
    inputWidth?: string,
    backgroundButton?: string
}  

export const LoginContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    margin: 15rem 0;

    .close {
      min-width: 50rem;
      color: #FFF;
      display: flex;
      justify-content: flex-end;
      cursor: pointer;

      @media (max-width: 600px) {
        min-width: 92%;
        margin: 0 1rem;
      }
    }
`;

export const FormLogin = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 13.5px );
  -webkit-backdrop-filter: blur( 13.5px );
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  min-width: 50rem;
  border-radius: 0.5rem;
  background-color: var(--white-background);

  @media (max-width: 600px) {
    min-width: 60%;
    margin: 0 1rem;
  }
`;

export const FormHeadline = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem;
  border-bottom: 1px solid var(--border-light-white);
`;

export const FormHeadlineDescription = styled.div<LoginHtmlAttributes>`
  font-weight: 500;
  color: var(--title-color);
  font-size: ${props => props.fontSize};
`;

export const FormContainer = styled.section`
  padding: 5rem 2.5rem 2.5rem;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }
`;

export const Label = styled.label`
  position: relative;
  width: 100%;

  .visibility-password-icon-login {
    color: var(--text-color);
    position: absolute;
    right: 1rem;
    top: -0.5rem;
    font-size: 2rem;
    cursor: pointer;
  }

  .visibility-password-icon-signup {
    color: var(--text-color);
    position: absolute;
    right: 1rem;
    top: 1.3rem;
    font-size: 2rem;
    cursor: pointer;
  }
`;

export const UserNameInputContainer = styled.div<LoginHtmlAttributes>`
  width: ${props => props.inputBoxWidth};
`;

export const PasswordInputContainer = styled(UserNameInputContainer)``;

export const UserNameInput = styled.input<LoginHtmlAttributes>`
  width: ${props => props.inputWidth};
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid var(--border-light-white);
  outline: none;
  transition: all ease 0.5s;

  &:focus {
    border-color: var(--main-color);
  }
`;

export const PasswordInput = styled(UserNameInput)``;

export const LoginRemember = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  width: 100%;
  padding: 1rem 0;

  .remember-credentials label {
      display: block;
      position: relative;
      padding-left: 3.5rem;
      cursor: pointer;
      user-select: none;
      line-height: 2.5rem;
      color: var(--title-color);

      input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;

        &:checked ~ .checkmark {
          background-color: var(--main-color);
          transition: 0.5s;
        }

        &:checked ~ .checkmark:after {
          display: block;
        }
      }

    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 2.5rem;
      width: 2.5rem;
      border: 1px solid var(--border-light-white);
      border-radius: 0.3rem;

      &:after {
        content: "";
        position: absolute;
        display: none;
        left: 0.8rem;
        top: 0.4rem;
        width: 0.5rem;
        height: 1rem;
        border: solid var(--border-light-white);
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
      }
    }
  }

  @media (max-width: 425px) {
    flex-direction: column;
    gap: 1.5rem;
    align-items: flex-start;
  }
`;

export const FormButtomContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  gap: 1rem;
`;

export const FormButton = styled.input<LoginHtmlAttributes>`
  background-color: ${props => props.backgroundButton};
  border: none;
  border-radius: 0.5rem;
  width: 100%;
  padding: 1.5rem;
  font-size: 1.4rem;
  font-weight: bold;
  color: var(--white-text-color);
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    opacity: 0.8;
  }
`;

export const FormFooterInfo = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2.5rem;
  margin-bottom: 2rem;

  p {
    padding: 2rem;
    width: 100%;
    text-align: center;
    border-radius: 0.5rem;
    font-size: 1.4rem;
    border: 1px solid var(--border-light-white);

    span a {
      color: var(--main-blue);
      font-weight: bold;
    }
  }
`;