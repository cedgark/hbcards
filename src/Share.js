import React, { useState } from 'react';
import Card from './Card';
import hearts_confetti from '../src/images/heart-confetti.gif';
import share_background_icon from '../src/images/share-background-icon.gif';
import Confetti from 'react-confetti';

const Share = () => {
  return (
    <div className="share-component">

    <Confetti/>
    <img className="share-background-icon" src={share_background_icon} />
    {/* <img className="share-confetti-background" src={hearts_confetti} /> */}
    <Card />
    </div>
  );
}

export default Share;
