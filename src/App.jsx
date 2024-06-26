import Header from "./component/Header/Header";
import Hero from "./component/Hero/Hero";
import './App.css';
import Residencies from "./component/Residencies/Residencies";
import Companies from "./component/Companies/Companies";
import Value from "./component/Value/Value";
function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Hero />
      </div>
      <div className="white-gradient" />
      <Companies />
      <Residencies/>
      <Value/>
    </div>
  );
}

export default App;
