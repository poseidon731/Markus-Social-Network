import styled from "styled-components";

export const MenuList = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;

    ul.list-menu {
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        padding: 2rem;
        gap: 2.5rem;
        margin-top: 2rem;
        margin-bottom: 10rem;
        overflow: auto;
    }

    ul.list-menu li a {
        display: flex;
        align-items: center;
        gap: 1.4rem;
    }

    span {
        font-size: 1.5rem;
    }

    .menu-icons {
        font-size: 3rem;
        color: var(--text-color);
        transition: all 0.4s;

        :hover {
            color: var(--main-color);
        }
    }

    &.secondary-menu {
        position: absolute;
        left: 0;
        align-items: flex-start;
        padding-left: 2rem;
        padding-bottom: 2rem;
        width: 17rem;
        background-color: var(--white-background);
        transition: all 0.5s;
        height: 100%;

        a {
            display: flex;
            align-items: center;
            gap: 1.5rem;
        }

    }

`;