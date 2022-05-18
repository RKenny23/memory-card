import React, { useState } from 'react';
import Cards from './Cards';
import Scoreboard from './Scoreboard';

export default function Game() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cardsArr, setCard] = useState([]);

  const handleScore = () => {
    setScore((prevScore) => prevScore + 1);
  };

  const handleHighScore = () => {
    if (score > highScore) {
      setHighScore(score);
    } else {
      return;
    }
  };

  const handleCard = (cardName) => {
    setCard((prevArr) => [...prevArr, cardName]);
  };

  const reset = () => {
    setScore(0);
    setCard([]);
  };

  const handleClick = (cardName) => {
    if (!cardsArr.includes(cardName)) {
      handleCard(cardName);
      handleScore();
    } else {
      handleHighScore();
      reset();
    }
  };

  return (
    <>
      <Scoreboard score={score} highScore={highScore} />
      <Cards handleClick={handleClick} score={score} highScore={highScore} />
    </>
  );
}
