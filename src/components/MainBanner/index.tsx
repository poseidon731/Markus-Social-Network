import React from "react";
import { MainBannerProps } from "../../types";
import { Container } from "./styles";

const MainBanner = ({ children, titlePage, pageDescription }: MainBannerProps) => {
    return (
        <Container>
            {children}
            <div className="desc-banner">
                <h1>{titlePage}</h1>
                <p>{pageDescription}</p>
                <h3>Markus Social Network</h3>
            </div>
        </Container>
    );
}

export default MainBanner;