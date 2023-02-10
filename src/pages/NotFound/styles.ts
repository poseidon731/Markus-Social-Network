import styled from "styled-components";

export const Container = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 7rem 2rem;

    img {
        max-width: 30rem;
    }

    h1 {
        font-size: 3rem;
        color: var(--title-color);
        margin: 2rem 0;
        text-align: center;
    }

    p {
        color: var(--title-color);
        font-size: 1.6rem;
        text-align: center;
    }

    a {
        margin: 2rem 0 0;
        font-size: 1.4rem;
        text-decoration: underline;
    }

`;