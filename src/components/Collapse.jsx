import { useState } from 'react'
import '../styles/_collapse.scss'

function Collapse({ props }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="collapse-container__section">
      <div className="collapse-title">
        <h3>{props.title}</h3>
        <i
          onClick={() => setIsOpen(!isOpen)}
          className={`icone fa-solid fa-angle-${isOpen ? 'down' : 'up'}`}
        ></i>
      </div>
      <p className={`collapse-text ${isOpen ? 'open' : ''}`}>
        {/* {props.description} */}
        {Array.isArray(props.description)
          ? props.description.map((equip) => <span>{equip}</span>)
          : props.description}
      </p>
    </div>
  )
}
export default Collapse
