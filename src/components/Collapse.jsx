import { useState } from 'react'

function Collapse({ props }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="collapse-container__section">
      <div className="collapse-title">
        <h3>{props.aboutTitle}</h3>
        <i
          onClick={() => setIsOpen(!isOpen)}
          className={`icone fa-solid fa-angle-${isOpen ? 'down' : 'up'}`}
        ></i>
      </div>
      {isOpen && <p className="collapse-text">{props.aboutText}</p>}
    </div>
  )
}
export default Collapse
