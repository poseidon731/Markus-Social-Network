import styled from "styled-components";

export const Sidebar = styled.div`
    width: 100%;
    background-color: var(--white-background);
    display: flex;
    flex-direction: column;
    border-radius: 3px;
    padding: 1rem 2.5rem 3.0rem;
`;

export const WidgetTitle = styled.h3`
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    gap: 1.3rem;
    padding: 1rem;

    svg {
        font-size: 2rem;
    }

    span {
        color: var(--title-color);
    }
`;