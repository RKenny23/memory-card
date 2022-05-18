import React from 'react';

export default function Card(props) {
  const {
    card: { src, name },
    handleClick,
  } = props;

  return (
    <button className="card" onClick={handleClick.bind(this, name)}>
      <img src={src} alt={name} />
    </button>
  );
}
