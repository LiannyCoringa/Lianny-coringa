import './App.css';
import AboutUs from './components/Aboutus';
import HardSkills from './components/HardSkills';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <AboutUs />
      <HardSkills />
    </div>
  );
}

export default App;
