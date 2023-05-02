import P from 'prop-types';
import * as Styled from './styles';

export const Main = () => {
  return (
    <Styled.Container>
      <div className="main_container">
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit doloribus quo, assumenda illo eius, laborum nulla aliquam perspiciatis repudiandae fugit eligendi! Recusandae perferendis tenetur architecto dignissimos nulla commodi velit accusantium reprehenderit numquam facere, libero temporibus distinctio. Similique explicabo </p>
        <div className="contact">
          Contato
        </div>
      </div>
    </Styled.Container>
  );
};

Main.propTypes = {
  children: P.node.isRequired,
};
