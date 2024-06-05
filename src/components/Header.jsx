import LogoKasa from '../assets/logo_kasa.svg';
import { NavLink } from 'react-router-dom';
import '../styles/_header.scss';

function Header() {
  return (
    <div className="header-container">
      <img src={LogoKasa} alt="Logo Kasa" />
      <nav className="header-nav">
        <NavLink to="/" className="header-nav__link">
          Accueil
        </NavLink>
        <NavLink to="/" className="header-nav__link">
          À Propos
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
