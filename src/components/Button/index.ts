import styled from "styled-components";

type ButtonProps = {
    btnMobile?: string | boolean,
    positionBtn?: string | boolean,
    btnDesktop?: string,
    bgButton?: string,
    sizeButton?: string 
}

export const Button = styled.button<ButtonProps>`
    width: 7rem;
    height: 7rem;
    background-color: var(--main-color);
    border: none;
    display: ${props => props.btnMobile ? 'none' : 'flex'};
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: ${props => props.positionBtn ? 'fixed' : 'static'};

    .icon-main-menu {
        color: var(--white-text-color);
        font-size: 4rem;
    }

    span.show-login-ballon {
        background-color: var(--secondary-color);
        color: var(--white-text-color);
        text-transform: uppercase;
        font-size: 1rem;
        padding: 5px 12px;
        position: absolute;
        right: 8.5rem;
        border-radius: 5px;
        opacity: 1;
        transition: all ease 1s;
        cursor: default;

        @media (max-width: 768px) {
            display: none;
        }
    }

    span.show-login-ballon:after, span.hide-login-ballon:after {
        content: "";
        width: 0; 
        height: 0;
        position: absolute;
        right: -0.8rem;
        bottom: -0.1rem;
        border-top: 12px solid transparent;
        border-bottom: 12px solid transparent;
        border-left: 12px solid var(--secondary-color);
        border-radius: 50%;
    }

    span.hide-login-ballon {
        background-color: var(--secondary-color);
        text-transform: uppercase;
        font-size: 1rem;
        padding: 5px 12px;
        position: absolute;
        /* right: 0px; */
        right: 8.5rem;
        border-radius: 5px;
        opacity: 0;
        transition: all ease 1s;
    }

    @media (max-width: 768px) {
        display: ${props => props.btnDesktop};
    }
`;

export const LoginButton = styled(Button)`
    background-color: var(--main-color);

    .icon-login {
        font-size: 2.5rem;
    }
`;