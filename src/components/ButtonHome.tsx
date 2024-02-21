import { useEffect, useState } from 'react';
import buttonImg from '../images/icons8-acima-dentro-de-um-círculo-50.png';

function ButtonHome() {
  const [isVisible, setIsVisible] = useState(false);
  const handleScroll = () => {
    const { scrollY } = window;

    if (scrollY > 150) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    isVisible && (
      <a href="#nav" className="ButtonHome">
        <button className="ButtonHome">
          <img src={ buttonImg } alt="Home" />
        </button>
      </a>
    ));
}

export default ButtonHome;
