import React from 'react';
import LogoKasa from '../assets/logo_kasa.svg';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="banner">
      <img src={LogoKasa} alt="Logo Kasa" />
      <nav className="banner__nav">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/">À Propos</NavLink>
      </nav>
    </div>
  );
}

export default Header;
