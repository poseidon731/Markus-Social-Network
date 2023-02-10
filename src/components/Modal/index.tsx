import React from "react";
import { ModalContainer } from "./styles";

const Modal = ({children}: any) => {
    return (
        <ModalContainer>
            {children}
        </ModalContainer>
    )
}

export default Modal;
