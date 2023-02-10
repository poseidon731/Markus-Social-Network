import styled from "styled-components";

export const UserMenuContainer = styled.section`
	background-color: var(--main-background-content);
	display: flex;
	width: 100%;
	padding: 3.5rem;

  @media(max-width: 768px) {
    display: none;
  }
`

export const UserMenu = styled.nav`
	background-color: var(--white-background);
	width: 100%;
	height: auto;
`

export const MenuList = styled.ul`
	display: flex;
	flex-flow: wrap;
	list-style: none;
	width: 100%;
	height: 100%;
	background-color: var(--white-background);
`;

export const List = styled.li`

  a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 10rem;
      height: 10rem;
      border: 1px solid var(--border-light-white);
      border-left: none;
      gap: 1rem;
      cursor: pointer;
      color: var(--input-search-color);
      transition: all ease-in 0.3s;

      :hover {
        color: var(--main-color);
      }

      :first-child {
        border-left: 1px solid var(--border-light-white);
      }

      span.user-menu-icon svg {
        font-size: 2.5rem;
      }

      span {
        font-size: 1.4rem;
        font-weight: 700;
      }
  }
`;

export const UserMenuListMobile = styled(UserMenuContainer)`
  @media(min-width: 769px) {
    display: none;
  }

  @media(max-width: 768px) {
    display: flex;
  }
`;

export const UserMenuMobile = styled(UserMenu)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3rem;
  align-items: center;

  .close-user-menu-mobile {
    cursor: pointer;
    padding: 0 2rem;

    svg {
      color: var(--text-color);
    }
  }

  ul.user-menu-list-closed {
    display: none;
  }

  ul.user-menu-list {
    display: flex;
    flex-direction: column;
    list-style: none;
    width: 100%;
    height: 100%;
    background-color: var(--white-background);
    gap: 2rem;


    li {
      a {
        display: flex;
        align-items: center;
        gap: 1rem;
        cursor: pointer;
        color: var(--input-search-color);
        transition: all ease-in 0.3s;
        font-size: 1.4rem;

        :hover {
          color: var(--main-color);
        }

        span.user-menu-icon svg {
          font-size: 2.5rem;
        }

        span {
          font-size: 1.4rem;
          font-weight: 700;
        }
      }
    }
  }
`;
