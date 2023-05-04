import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    background-color: ${theme.colors.gray};
    color: ${theme.colors.white};
    padding: 7rem 9rem;
    min-height: 70vh;

    > .products_container {
      max-width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 30rem;
    }
    @media ${theme.sizes.ltMedium} {
      > .products_container {
        gap: 10rem;
      }
    }
  `}
`;
