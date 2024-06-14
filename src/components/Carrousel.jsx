import '../styles/_carrousel.scss'
import { useState } from 'react'

function Carrousel({ pictures }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slideLength = pictures.length

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1)
  }
  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
  }

  return (
    <div className="carrousel-container">
      <i
        className="arrow arrow__left fa-solid fa-angle-left"
        onClick={prevSlide}
      ></i>
      <i
        className="arrow arrow__right fa-solid fa-angle-right"
        onClick={nextSlide}
      ></i>
      {pictures.map((picture, index) => (
        <div
          key={index}
          className={`carrousel-slide ${
            index === currentSlide ? 'active' : ''
          }`}
        >
          <img className="carrousel-img" src={picture} alt={`Slide ${index}`} />
        </div>
      ))}
      <div className="carrousel-counter">
        {currentSlide + 1} / {slideLength}
      </div>
    </div>
  )
}
export default Carrousel
