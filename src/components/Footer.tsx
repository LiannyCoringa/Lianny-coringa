import wpp from '../images/whatsapp (1).png';
import logo from '../images/image0.png';

function Footer() {
  return (
    <>
      <div className="linha" />
      <footer className="footer">
        <img
          src={ logo }
          alt="logo com o nome Lianny"
          className="footer-img"
        />
        <p>Projetado e Desenvolvido por Lianny Coringa.</p>
        <div className="footer-contact">
          <a href="https://wa.me/5584999874004" target="_blank" rel="noreferrer">
            <img src={ wpp } alt="celular" />
          </a>
          <p>+55 84 999874004</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
