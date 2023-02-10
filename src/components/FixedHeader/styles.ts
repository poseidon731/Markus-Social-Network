import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    align-items: center;
    width: 100%;
    height: 7rem;
    padding: 10px;
    background-color: var(--white-background);
    color: var(--title-color);
    top: 0;
    position: relative;
    top: 7rem;
    z-index: 1;

    a:hover {
        color: inherit;
    }

    .logo {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }

    img {
        height: 6rem;
        display: flex;
        align-items: center;
    }

    .title-logo h2 {
        font-size: 1.8rem;
        text-transform: uppercase;
    }

    .desc-logo h3 {
        font-size: 1.3rem;
        font-weight: 300;
        text-transform: uppercase;
    }

    @media (min-width: 769px) {
        display: none;
    }

    @media (max-width: 768px) {
        top: 0;
    }
`;