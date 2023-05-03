import * as Styled from './styles';
import {mock} from './Product/mock';
import {Product} from './Product'

export const Products = () => {
  return (
    <Styled.Container>
      <h2>Serviços</h2>
      <div className="products_container">
        {
          mock.map(p => (
            <Product img={p.img} title={p.title} desc={p.desc} key={p.title}/>
          ))
        }
      </div>
    </Styled.Container>
  );
};
