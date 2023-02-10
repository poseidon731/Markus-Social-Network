import styled from "styled-components";

export const Container = styled.footer`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3%;
    gap: 2rem;
    background-color: var(--white-background);
    color: var(--text-color);

    a.link-logo-footer:first-child:hover {
        color: var(--title-color);
    }

    .footer-logo {
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

    .footer-description {
        text-align: center;
        font-size: 1.6rem;
    }

    .footer-social-icons {
        display: flex;
        gap: 2rem;

        svg {
            font-size: 2.2rem;
        }
    }
`