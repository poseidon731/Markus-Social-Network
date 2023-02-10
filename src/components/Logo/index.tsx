import React from "react";
import { Link } from "react-router-dom";
import { LogoContent } from "./styles";
import LogoImage from "../_assets/img/logo.png";

const Logo = () => {
    return (
        <LogoContent>
            <Link to="/">
                <img src={LogoImage} alt="Logo Markus Social Network" />
                <div className="title-box">
                <div className="title-logo">
                    <h2>Markus</h2>
                </div>
                <div className="desc-logo">
                    <h3>Social Network</h3>
                </div>
                </div>
            </Link>
        </LogoContent>
    )
}

export default Logo;