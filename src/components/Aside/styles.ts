import styled from "styled-components";
import { Button } from '../Button'

export const Container = styled.section`
    display: grid;
    grid-gap: 3rem;

    aside {
        display: flex;
        flex-direction: column;
        width: 100%;
        border-radius: 0.5rem;
        grid-gap: 3.5rem;
    }
`;

export const AsideButton = styled(Button)`
    width: 100%;
    height: auto;
    border-radius: 0.5rem;
    padding: 1rem;
    margin-top: 2rem;
    border: 0.1rem solid var(--main-color);
    background-color: var(--white-background);
    color: var(--title-color);
    transition: all 0.3s;

    :hover {
        background-color: var(--main-color);
        color: var(--white-text-color);
    }
`;