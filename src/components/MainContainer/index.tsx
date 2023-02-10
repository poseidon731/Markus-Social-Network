import styled from "styled-components";

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    left: 7rem;
    right: 0;
    margin-left: 17rem;

    @media (max-width: 768px) {
        margin-left: 0;
    }
`;
