import * as Styled from './styles';
import logo from '../../assets/logo.jpg';

export const Header = () => {
  return (
    <Styled.Container>
      <img src={logo} alt="Logo" />
    </Styled.Container>
  );
};
