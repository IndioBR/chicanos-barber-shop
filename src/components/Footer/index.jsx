import * as Styled from './styles';
import fb from '../../assets/fb.svg';
import ig from '../../assets/ig.svg';

export const Footer = () => {
  return (
    <Styled.Container>
        <h2>Barbearia Chicanos</h2>
        <div className="icons-container">
          <img src={fb} alt="Facebook" />
          <img src={ig} alt='Instagram' />
        </div>
    </Styled.Container>
  );
};
