import { useState, useContext } from 'react'

import Avatar from './Avatar';
import DialogModal from "./Dialog";


const Card = ({ character }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="card-container">
      <div className="card" onClick={() => setIsOpened(true)}>
        <div>{character.name}</div>
        <Avatar image={character.image} />
      </div>
      <DialogModal
        isOpened={isOpened}
        info={character}
        onClose={() => setIsOpened(false)}
      />
    </div>
  );
}

export default Card;