import styled from "styled-components";

export const LogoContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 3rem;

  a {
    display: flex;
    align-items: center;
    gap: 1rem;
    
    &:hover {
      color: var(--title-color);
    }
  }

  img {
    height: 8rem;
  }

  .title-box {
    text-transform: uppercase;
  }

  .title-logo h2 {
    font-size: 2.8rem;
  }

  .desc-logo h3 {
    font-weight: 300;
    font-size: 1.88rem;
  }
`;
