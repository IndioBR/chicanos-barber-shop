import { Base } from "../components/Base";
import { Main } from '../components/Sections/Main';
import { Products } from '../components/Sections/Products';
import { Location } from '../components/Sections/Location';

function App() {
  return (
    <Base>
      <Main/>
      <Products />
      <Location />
    </Base>
  );
}

export default App;
