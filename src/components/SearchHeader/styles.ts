import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 35%;
    background-color: var(--input-search-background);

    @media (max-width: 768px) {
        width: calc(100% - 14rem);
    }
`;