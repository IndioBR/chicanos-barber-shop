import { Base } from "../components/Base";
import { Main } from '../components/Sections/Main';
import { Products } from '../components/Sections/Products';
import { Location } from '../components/Sections/Location';
import { About } from '../components/Sections/About';

function App() {
  return (
    <Base>
      <Main/>
      <Products />
      <Location />
      <About />
    </Base>
  );
}

export default App;
