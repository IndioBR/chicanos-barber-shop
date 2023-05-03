import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    height: 70vh;
    width: 100%;
    position: relative;
    > .address {
      border-radius: 2rem;
      background-color: #000000;
      padding: 5rem 7rem;
      width: 30%;
      height: 40%;
      position: absolute;
      top: 20%;
      right: 3rem;
      z-index: 5;
      color: #FFFFFF;
      display: flex;
      flex-direction: column;
      justify-content: center;

      > h3 {
        font-size: 3.8rem;
      }
      > p {
        font-size: 2.8rem;
      }
    }
  `}
`;
