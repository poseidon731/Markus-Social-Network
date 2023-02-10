import styled from "styled-components";

export const MenuMobile = styled.nav`
    display: block;
    width: 17rem;
    height: auto;
    background-color: var(--white-background);
    transition: all 0.5s;

    &.open-menu-mobile {
        position: absolute;
        left: 0;
        top: 7rem;
        z-index: 999;
    }

    &.close-menu-mobile {
        position: absolute;
        left: -17rem;
        top: 7rem;
        z-index: 999;
    }

    ul.list-menu {
        padding: 20px;
        list-style: none;
        gap: 2.5rem;

        .menu-icons {
            font-size: 3rem;
        }
    }

    ul.list-menu li {
        margin-bottom: 2rem;
    }

    ul.list-menu li a {
        display: flex;
        align-items: center;
        gap: 1.4rem;
        color: var(--text-color);
    }

    ul.list-menu li a span {
        font-size: 1.5rem;
    }

    @media (min-width: 769px) {
        display: none;
    }
`;