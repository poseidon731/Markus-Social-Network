import React from "react";
import { Container } from "./styles";
import Error404 from "../../components/_assets/img/error-404.png"
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <Container>
            <img src={Error404} alt="Erro 404 - Página não encontrada" />
            <h1>Página não encontrada. :/</h1>
            <p>Desculpa. Á página que você está procurando não existe nesse site.</p>
            <Link to="/">Voltar para Feed</Link>
        </Container>
    )
}

export default NotFound;