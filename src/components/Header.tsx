import NavBar from './NavBar';
import img2 from '../images/image2.png';

function Header() {
  return (
    <header id="nav">
      <img src={ img2 } alt="lianny coringa" width={ 200 } />
      <NavBar />
    </header>
  );
}

export default Header;
