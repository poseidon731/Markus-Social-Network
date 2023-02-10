import styled from "styled-components";

export const ModalContainer = styled.section`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: var(--modal-background);
    z-index: 5;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem;
`;

export const PortfolioDetails = styled.div`

    img {
        max-height: 50rem;

        @media(max-width: 768px) {
            width: 100%;
        }
    }
    
    .portfolio-description {
        display: flex;
        justify-content: space-between;
        color: var(--white-text-color);

        span {
            font-size: 1.4rem;
            padding: 0.5rem;
        }

        svg {
            cursor: pointer;
        }
    }

    @media(max-width: 768px) {
        max-width: 90%;
    }
`;