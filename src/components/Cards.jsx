import { lodging } from '../datas/lodging.js';
import '../styles/_cards.scss';
import { Link } from 'react-router-dom';
// import LodgingPage from './pages/LodgingPage';

function Cards() {
  return (
    <div className="cards-container">
      {lodging.map((index) => (
        <Link key={index.id} to={`/LodgingPage/${index.id}`} className="cards">
          <img src={index.cover} alt={index.title} />
          <p>{index.title}</p>
        </Link>
      ))}
    </div>
  );
}
export default Cards;
