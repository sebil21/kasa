import '../styles/_rate.scss'

function Rate({ rating }) {
  return (
    <div className="rate-container">
      {[1, 2, 3, 4, 5].map((index) => (
        <i
          key={index}
          className={
            index <= rating
              ? 'full-star fa-solid fa-star'
              : 'empty-star fa-solid fa-star'
          }
        ></i>
      ))}
    </div>
  )
}
export default Rate
