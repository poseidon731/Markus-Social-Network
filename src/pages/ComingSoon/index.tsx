import React from "react";
import { Container } from "./styles";
import ComingSoonImage from "../../components/_assets/img/coming-soon.png"
import { useNavigate } from "react-router-dom";

const ComingSoon = () => {

    const navigate = useNavigate();

    const handleBackButton = () => {
        navigate(-1)
    }

    return (
        <Container>
            <img src={ComingSoonImage} alt="Em Breve" />
            <h1>Página em Construção</h1>
            <button onClick={handleBackButton}>Voltar</button>
        </Container>
    )
}

export default ComingSoon;