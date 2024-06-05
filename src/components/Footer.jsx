import '../styles/_footer.scss';
import logoFooter from '../assets/logo-footer.svg';

function Footer() {
  return (
    <footer className="footer-container">
      <img src={logoFooter} alt="logo Kasa footer" />
      <p className="footer-container__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
