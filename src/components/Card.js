import { useContext } from 'react'
import { BsFillStarFill } from "react-icons/bs";
import { DialogContext } from '../contexts/DialogContext'

// components
import Avatar from './Avatar';
import DialogModal from "./Dialog";


const Card = ({character,  isFav = false }) => {
  const { toggleHover, toggleFav, setIsOpened, isOpened } = useContext(DialogContext);

  return (
    <div className="card-container">
      <BsFillStarFill
        className={isFav ? 'star-active' : 'star'}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
        onClick={() => toggleFav(character, isFav)}
      />
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