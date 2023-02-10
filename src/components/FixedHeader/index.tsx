import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";
import  Logo  from "../_assets/img/logo.png";

export const FixedHeader = () => {
    return (
        <Container>
            <Link to="/">
                <div className="logo">
                    <img src={Logo} alt="Logo Markus" />
                    <div className="title-box">
                        <div className="title-logo">
                            <h2>Markus</h2>
                        </div>
                        <div className="desc-logo">
                            <h3>Social Network</h3>
                        </div>
                    </div>
                </div>
            </Link>
        </Container>
    );
}