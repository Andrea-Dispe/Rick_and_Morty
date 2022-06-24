import { useState } from 'react'
import Avatar from './Avatar';


const Card = ({ character }) => {

  return (
    <div className="card-container">
      <div className="card">
        <div name={character.name}></div>
        <Avatar image={character.image} />
      </div>
    </div>
  );
}

export default Card;