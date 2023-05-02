import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: start;
    height: 70rem;
    width: 100%;
    background-image: url("https://images.unsplash.com/photo-1635273051937-a0ddef9573b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjI5NjF8MHwxfHNlYXJjaHwyMXx8YmFyYmVyJTIwc2hvcHxlbnwwfHx8fDE2ODI5NDE0NDM&ixlib=rb-4.0.3&q=80&w=1080");
    background-position: center center;
    background-size: cover;
    text-align: start;

    > .main_container {
      padding: 3rem 5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-color: rgba(0,0,0,.4);
      color: ${theme.colors.white};
      height: 70rem;
      width: 100%;
      gap: 4rem;
      > h1, p {
        max-width: 50%;
      }
      > h1 {
        font-size: 4.4rem;
      }

      > p {
        font-size: 1.8rem;
      }

      > .contact {
        width: 8rem;
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

      > .contact:hover {
        cursor: pointer;
        color: ${theme.colors.white};
        background-color: ${theme.colors.yellow};
      }
    }
  `}
`;
