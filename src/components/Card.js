import { useContext, useState } from 'react'
import { BsFillStarFill } from "react-icons/bs";
import { DialogContext } from '../contexts/DialogContext'
import './Card.css'

// components
import Avatar from './Avatar';
import DialogModal from "./Dialog";


const Card = ({character,  isFav = false, isFavPage = false}) => {
  const { toggleHover, toggleFav} = useContext(DialogContext);
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className={isFavPage ? "card-container-favourites" : "card-container"}>
      <BsFillStarFill
        className={isFav ? 'star star-active' : 'star star-inactive'}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
        onClick={() => toggleFav(character, isFav)}
      />
      <div className="card" onClick={() => setIsOpened(true)}>
        <div className="card-name">{character.name}</div>
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