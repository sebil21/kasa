import '../styles/_carrousel.scss';
import { useState } from 'react';
import { lodging } from '../datas/lodging';

function Carrousel({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = slides.length;

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className="carrousel-container">
      <i className="arrow-left fa-solid fa-angle-left" onClick={prevSlide}></i>
      <i className="arrow-right fa-solid fa-angle-right" onClick={nextSlide}></i>
      {lodging.map((index) => (
        <div className="carrousel-img">
          <img key={index.id} src={index.pictures} alt={index.title} />
          </div>
      ))}
    </div>
  )
}
export default Carrousel;
