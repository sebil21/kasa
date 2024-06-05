import { NavLink } from 'react-router-dom';
import '../styles/_error.scss';

function Error() {
  return (
    <div className="error-container">
      <p className="error-container__nbr">404</p>
      <p className="error-container__text">
        Oups! La page que vous demandez n'existe pas
      </p>
      <NavLink to="/" className="error-container__link">
        Retourner sur la page d'accueil
      </NavLink>
    </div>
  );
}

export default Error;
