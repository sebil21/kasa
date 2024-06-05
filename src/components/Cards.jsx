import { lodging } from '../datas/lodging.js';
import '../styles/_cards.scss';

function Cards() {
  return (
    <div className="cards-container">
      {lodging.map((index) => (
        <div key={index.id} className="cards">
          <img src={index.cover} alt={index.title} />
          <p>{index.title}</p>
        </div>
      ))}
    </div>
  );
}
export default Cards;
