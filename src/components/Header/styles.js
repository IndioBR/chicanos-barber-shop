import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
    height: 10vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 2.5rem;
    font-size: 1.8rem;
    color: ${theme.colors.white};
    > img {
      max-width: 6.4rem;
    }

    @media ${theme.sizes.ltMedium} {
      & > img {
        max-width: 4rem;
      }
    }
  `}
`;
