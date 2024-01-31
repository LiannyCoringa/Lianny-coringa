import './App.css';
import AboutUs from './components/Aboutus';
import HardSkills from './components/HardSkills';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <AboutUs />
      <HardSkills />
      <Projects />
    </div>
  );
}

export default App;
