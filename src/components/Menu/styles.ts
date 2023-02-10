import styled from "styled-components";

export const Container = styled.section`
    width: 17rem;
    height: 100%;
    top: 0;
    position: fixed;
    z-index: 2;

    .logo-content {
        display: flex;
        align-items: center;
        padding: 1rem;
        height: 7rem;
        width: 100%;

        .logo {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;

            img {
                height: 6rem;
            }
        }

        .title-box {
            text-transform: uppercase;
        }

        .title-logo h2 {
            font-size: 1.8rem;
        }

        .desc-logo h3 {
            font-size: 1rem;
            font-weight: 300;
        }

        a:hover {
            color: var(--title-color);
        }
    }

    @media (max-width: 768px) {
        display: none;
    }
`
