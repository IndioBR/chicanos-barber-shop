import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    min-height: 70vh;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    font-size: 2.4rem;
    > p {
      max-width: 70%;
    }

    @media ${theme.sizes.ltMedium} {
      min-height: 70vh;
      gap: 5rem;
      font-size: 1.4rem;
      p {
        max-width: 70%;
      }
    }
  `}
`;
