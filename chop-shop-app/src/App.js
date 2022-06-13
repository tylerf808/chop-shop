import DeerInfo from "./components/deer-info/DeerInfo";
import DeerOptions from "./components/deer-options/DeerOptions";
import MeatType from "./components/meat-type/MeatType";
import Jerky from "./components/jerky/Jerky";
import Bologna from "./components/bologna/Bologna";
import HotDogs from "./components/hot-dogs/HotDogs";
import FreshSausage from "./components/fresh-sausage/FreshSausage";
import SnackSticks from "./components/snack-sticks/SnackSticks";
import './index.css'

function App() {
  return (
    <div className="App">
      <header className="company-header">
        <h1>The Chop Shop</h1>
        <h2>6625 Taneytown Pike, Taneytown, MD 21787</h2>
        <h2>443-415-4643</h2>
      </header>
      <DeerInfo />
      <DeerOptions />
      <MeatType />
      <Jerky />
      <Bologna />
      <HotDogs />
      <SnackSticks />
      <FreshSausage />
    </div>
  );
}

export default App;