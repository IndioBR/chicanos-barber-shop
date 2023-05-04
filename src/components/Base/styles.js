import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    > .content {
      min-height: 100vh;
      width: 100%;
    }
  `}
`;
