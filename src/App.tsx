import './App.css';
import AboutUs from './components/Aboutus';
import ContactForm from './components/Contact';
import HardSkills from './components/HardSkills';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import ButtonHome from './components/ButtonHome';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <AboutUs />
      <HardSkills />
      <Projects />
      <ContactForm />
      <ButtonHome />
    </div>
  );
}

export default App;
