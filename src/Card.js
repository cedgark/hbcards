import React, { useState } from 'react';
import person_image from '../src/images/me.png';
import birthday_cake_icon from '../src/images/birthday-cake-icon.gif';
import card_background_image from '../src/images/card-wallpaper.jpeg';

const Card = () => {
  const [name, setName] = useState("Dannielo");

  return (
    <div className="card-component">



    <div className="card" style={{background: `url(${card_background_image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'}}>

    <h2 className="card-title"> Happy Birthday, <div className="card-title-name">{name}!</div></h2>

    <img className="card-img" src={person_image} />

    <img className="card-birthday-cake-icon" src={birthday_cake_icon} />

    </div>

    </div>

  );
}

export default Card;
