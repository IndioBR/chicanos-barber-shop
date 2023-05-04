import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    text-align: center;
    max-width: 40rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    > .product_image {
      > img {
        object-fit: cover;
        height: 30rem;
        width: 40rem;
      }
    }
    > .product_description {
      display: flex;
      flex-direction: column;
      gap: 3rem;
      > h3 {
        font-size: 2.4rem;
      }
      > p {
        font-size: 2.4rem;
      }
      > .product_info {
        align-self: center;
        width: 12rem;
        border: 2px solid ${theme.colors.yellow};
        border-radius: 1rem;
        color: ${theme.colors.yellow};
        padding: 1rem 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        font-size: 1.2rem;
      }
      > .product_info:hover {
        cursor: pointer;
        color: ${theme.colors.white};
        background-color: ${theme.colors.yellow};
      }
    }
    @media ${theme.sizes.ltMedium} {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      .product_image {
        > img {
          height: 15rem;
          width: 20rem;
        }
      }
      .product_description {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        h3 {
          font-size: 1.8rem;
        }
        p {
          font-size: 1.8rem;
        }
        .product_info {
          width: 12rem;
          padding: 1rem 1.5rem;
          font-size: 1.2rem;
        }
      }
    }
  `}
`;
