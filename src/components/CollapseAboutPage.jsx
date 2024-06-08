import { collapseAboutPage } from '../datas/collapseAboutPage.js';
import '../styles/_about.scss';
import { useState } from 'react';

function CollapseAbout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse-container">
      {collapseAboutPage.map((index) => (
        <div key={index.id} className="collapse-container__section">
          <div className="collapse-title">
            <h3>{index.aboutTitle}</h3>
            <i
              onClick={() => setIsOpen(index.id)}
              className={`icone fa-solid fa-angle-${isOpen ? 'down' : 'up'}`}
            ></i>
          </div>
          {isOpen && <p className="collapse-text">{index.aboutText}</p>}
        </div>
      ))}
    </div>
  );
}

export default CollapseAbout;
