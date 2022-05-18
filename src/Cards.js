import React, { useState, useEffect } from 'react';
import Card from './Card';

import Ana from './images/Icon-Ana.webp';
import Ashe from './images/Icon-Ashe.webp';
import Bastion from './images/Icon-Bastion.webp';
import Brigitte from './images/Icon-Brigitte.webp';
import Cassidy from './images/Icon-Cassidy.webp';
import Dva from './images/Icon-D.Va.webp';
import Doomfist from './images/Icon-Doomfist.webp';
import Genji from './images/Icon-Genji.webp';
import Hanzo from './images/Icon-Hanzo.webp';
import Junkrat from './images/Icon-Junkrat.webp';
import Lucio from './images/Icon-Lucio.webp';
import Mei from './images/Icon-Mei.webp';
import Mercy from './images/Icon-Mercy.webp';
import Moira from './images/Icon-Moira.webp';
import Orisa from './images/Icon-Orisa.webp';
import Pharah from './images/Icon-Pharah.webp';
import Reaper from './images/Icon-Reaper.webp';
import Reinhardt from './images/Icon-Reinhardt.webp';
import Roadhog from './images/Icon-Roadhog.webp';
import Soldier from './images/Icon-Soldier_76.webp';

export default function Cards(props) {
  const { handleClick, score, highScore } = props;

  const [cards, setCards] = useState([
    { src: Ana, name: 'Ana', id: 3 },
    { src: Ashe, name: 'Ashe', id: 4 },
    { src: Bastion, name: 'Bastion', id: 5 },
    { src: Brigitte, name: 'Brigitte', id: 6 },
    { src: Cassidy, name: 'Cassidy', id: 7 },
    { src: Dva, name: 'Dva', id: 8 },
    { src: Doomfist, name: 'Doomfist', id: 9 },
    { src: Genji, name: 'Genji', id: 10 },
    { src: Hanzo, name: 'Hanzo', id: 11 },
    { src: Junkrat, name: 'Junkrat', id: 12 },
    { src: Lucio, name: 'Lucio', id: 13 },
    { src: Mei, name: 'Mei', id: 14 },
    { src: Mercy, name: 'Mercy', id: 1 },
    { src: Moira, name: 'Moira', id: 15 },
    { src: Orisa, name: 'Orisa', id: 16 },
    { src: Pharah, name: 'Pharah', id: 17 },
    { src: Reaper, name: 'Reaper', id: 18 },
    { src: Reinhardt, name: 'Reinhardt', id: 2 },
    { src: Roadhog, name: 'Roadhog', id: 19 },
    { src: Soldier, name: 'Soldier', id: 20 },
  ]);

  const shuffle = (newCards) => {
    for (let i = newCards.length - 1; i > 0; i--) {
      let randomIdx = Math.floor(Math.random() * i);
      [newCards[randomIdx], newCards[i]] = [newCards[i], newCards[randomIdx]];
    }
  };

  useEffect(() => {
    const newCards = [...cards];
    shuffle(newCards);
    setCards(newCards);
  }, [score, highScore]);

  return (
    <>
      <div className="card-container">
        {cards.map((card) => (
          <Card card={card} key={card.id} handleClick={handleClick} />
        ))}
      </div>
    </>
  );
}
