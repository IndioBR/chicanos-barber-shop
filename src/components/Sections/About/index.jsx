import P from 'prop-types';
import * as Styled from './styles';

export const About = ({ children }) => {
  return (
    <Styled.Container>
      <h1>{children}</h1>
    </Styled.Container>
  );
};

About.propTypes = {
  children: P.node.isRequired,
};
