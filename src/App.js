import React, { useState, useEffect } from "react";
import jsonData from "./data.json";
import dot from './assets/images/icon-ellipsis.svg';
import img from './assets/images/image-jeremy.png';

function App() {
  const [cards, setUsers] = useState([]);
  const [activeLink, setActiveLink] = useState('weekly');
  const [activeName, setActiveName] = useState('week');

  useEffect(() => {
    setUsers(jsonData.cards);
    
  }, []);

  const handleLinkClick = (link,Name) => {
    setActiveLink(link);
    setActiveName(Name);
  };
  return (
      <div>
        <main>
          <div className='profile'>
            <div className="info">
              <img src={img} alt="profile picture"/>
              <h1><span>Report for <br/></span>
              jeremy robson</h1>
        
            </div>
            <div className="link">
              <p className={activeLink === 'daily' ? 'active' : ''} onClick={() => handleLinkClick('daily','day')}>daily</p>
              <p className={activeLink === 'weekly' ? 'active' : ''} onClick={() => handleLinkClick('weekly','week')}>weekly</p>
              <p className={activeLink === 'monthly' ? 'active' : ''} onClick={() => handleLinkClick('monthly','month')}>monthly</p>
            </div>
        
          </div>
          <div className='container'>
            {cards.map((card) => {
              return (
                <div className="background" key={card.id}>
                  <div className="card" >
                    <div className="top">
                      <h2>{card.title}</h2>
                      <img src={dot} alt="dots"/>
                    </div>
                    <h3>{card.timeframes[activeLink].current}hrs</h3>
                    <p>Last {activeName} - {card.timeframes[activeLink].previous}hrs</p>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
                <div className="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
            Coded by <a href="https://github.com/Rishabh763">Rishabh Singh</a>.
          </div>
      </div>
  
  )
}

export default App
