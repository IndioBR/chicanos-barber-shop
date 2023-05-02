import P from 'prop-types';
import * as Styled from './styles';
import {Footer} from '../Footer';
import {Header} from '../Header';

export const Base = ({ children }) => {
  return (
    <Styled.Container>
      <Header />
      <div className='content'>
        {children}
      </div>
      <Footer />
    </Styled.Container>
  );
};

Base.propTypes = {
  children: P.node.isRequired,
};
