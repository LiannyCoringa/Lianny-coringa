import './App.css';
import { FormspreeProvider } from '@formspree/react';
import AboutUs from './components/Aboutus';
import ContactForm from './components/Contact';
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
      <ContactForm />
    </div>
  );
}

export default App;
