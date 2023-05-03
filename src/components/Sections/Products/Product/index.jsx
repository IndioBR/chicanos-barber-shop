import * as Styled from './styles';
import P from 'prop-types'

export const Product = ({ img, title, desc }) => {
  return (
    <Styled.Container>
      <div className='product_image'>
        <img src={img} />
      </div>
      <div className="product_description">
        <h3>{title}</h3>
        <p>{desc}</p>
        <div className="product_info">
          Saiba Mais
        </div>
      </div>
    </Styled.Container>
  );
};

Product.propTypes = {
  img: P.string.isRequired,
  title: P.string.isRequired,
  desc: P.string.isRequired
}
