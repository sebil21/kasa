import { lodging } from '../datas/lodging.js'
import '../styles/_cards.scss'
import { Link } from 'react-router-dom'

function Cards() {
  return (
    <section className="cards-container">
      <div className="lodging">
        {lodging.map((index) => (
          <Link key={index.id} to={`/LodgingPage/${index.id}`}>
            <div className="lodging__card">
              <img src={index.cover} alt={index.title} />
              <p>{index.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
export default Cards
