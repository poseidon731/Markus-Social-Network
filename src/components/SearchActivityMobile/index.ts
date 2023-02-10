import styled from "styled-components";
import { Button } from "../Button";
import { Container } from "../SearchActivity/styles";


export const SearchActivityMobile = styled(Container)`
    height: auto;
    gap: 1rem;
    background-color: transparent;
    display: flex;
    flex-wrap: wrap;
`

export const BoxActivityMobile = styled(Button)`
    background-color: var(--white-background);
    border-radius: 3px;
    width: 33.33%;
    flex-direction: column;
    gap: 2rem;
    color: var(--input-search-color);
    padding: 5rem;
    font-weight: 700;
    cursor: pointer;
    flex: 1;

    svg {
        font-size: 2.5rem;
    }

    &:active {
        -webkit-tap-highlight-color: transparent;
    }
`;