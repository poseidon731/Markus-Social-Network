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
        max-width: 80%;
    }

    h1 {
        font-size: 5rem;
        text-align: center;
        padding: 2rem;
        color: var(--title-color);
    }

    button {
        padding: 1rem 2rem;
        font-size: 1.6rem;
        font-weight: 700;
        color: var(--white-text-color);
        background-color: var(--main-color);
        border: none;
        border-radius: .5rem;
        cursor: pointer;
    }
`;