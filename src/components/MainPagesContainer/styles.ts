import styled from "styled-components";

export const MainPagesContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 4rem;
    width: 100%;
    height: auto;
    padding: 3.5rem;
    background-color: var(--main-background-content);
    color: var(--text-color);
    
    .activity-members-mobile {
        @media (min-width: 769px) {
            display: none;
        }
    }
`;