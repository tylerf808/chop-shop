import DeerInfo from "./components/deer-info/DeerInfo";
import DeerOptions from "./components/deer-options/DeerOptions";
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
    </div>
  );
}

export default App;