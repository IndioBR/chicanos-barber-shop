import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray};
    height: 10vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 2.5rem;
    font-size: 1.6rem;
    color: ${theme.colors.white};

    > .icons-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      > img {
        max-width: 2.4rem;
      }
    }
  `}
`;
