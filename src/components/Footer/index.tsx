import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";
import  Logo  from "../_assets/img/logo.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';


export const Footer = () => {
    return (
        <Container>
            <Link to="/" className="link-logo-footer">
                <div className="footer-logo">
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
          <div className="footer-description">
            <p>Conecte-se com amigos e o mundo ao seu redor no Markus Social Network.</p>
          </div>
          <div className="footer-social-icons">
            <Link to="/">
              <FacebookIcon />
            </Link>
            <Link to="/">
              <TwitterIcon />
            </Link>
            <Link to="/">
              <PinterestIcon />
            </Link>
            <Link to="/">
              <YouTubeIcon />
            </Link>
            <Link to="/">
              <InstagramIcon />
            </Link>
          </div>
        </Container>
    )
}