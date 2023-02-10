import styled from "styled-components";
import banner from "../_assets/img/banner-background.jpg";

type MainBannerAttributtes = {
    maskBg?: string
}

export const Container = styled.section`
    width: 100%;
    height: 50rem;
    background-color: var(--main-background-content);
    background-image: url(${banner});
    background-position: center;
    background-size: cover;
    padding: 3rem 3rem 0;
    text-align: center;
    color: var(--white-text-color);
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    z-index: -2;
    margin-top: 7rem;
    position: relative;

    .desc-banner {
        display: flex;
        flex-direction: column;
        align-items: center;
        z-index: 2;
    }

    h1 {
        margin-top: 5rem;
        font-size: 4rem;
        font-weight: 300;
    }

    p {
        display: inline-block;
        margin: 4rem 0;
        width: 75%;
        font-size: 1.5rem;
        font-weight: 400;
    }

    h3 {
        text-transform: uppercase;
        font-weight: 300;
    }

    @media (max-width: 351px) {
        p {
            margin: 1rem 0;
        }

        h1 {
            margin-top: 0;
        }
    }

    @media (max-width: 600px) {
        padding-bottom: 1rem;
    }

    @media (max-width: 768px) {
        margin-top: 0;
    }
`;

export const MaskBanner = styled.div<MainBannerAttributtes>`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: ${props => props.maskBg ?'var(--main-maskBanner)':'var(--group-maskBanner)'};
    z-index: -1;
    opacity: 0.4;
`;

export const ImageUpperBanner = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 0 2rem;

    img {
        width: inherit;
    }

    @media (min-width: 1200px) {
        img {
            width: auto;
        }
    }
`;