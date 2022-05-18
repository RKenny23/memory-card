import React from 'react';

export default function Scoreboard(props) {
  const { score, highScore } = props;
  return (
    <>
      <h2>Current Score: {score} </h2>
      <h2>Best Score: {highScore} </h2>
    </>
  );
}
