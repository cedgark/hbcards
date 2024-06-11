import React, { useState } from 'react';

const Card = () => {
  const [name, setName] = useState("Sophie");

  return (
    <div className="card-component">
    <div className="card">
    <h2 className="card-title"> Happy Birthday, {name}!</h2>
    <img className="card-img" src="sophie.jpeg" />
    </div>
    <img className="card-confetti-pop" src="confetti-glitter.gif" />

    </div>
  );
}

export default Card;
