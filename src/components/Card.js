import { useState, useContext } from 'react'
import { BsFillStarFill } from "react-icons/bs";
import { FavouriteCharactersContext } from '../contexts/FavouriteCharacters'
// components
import Avatar from './Avatar';
import DialogModal from "./Dialog";


const Card = ({ character, isFav = false }) => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  const { addToFavourites, removeFromFavourites } = useContext(FavouriteCharactersContext);
  const [isOpened, setIsOpened] = useState(false);

  const toggleFav = () => {
    if (isFav) {
      removeFromFavourites(character.id);
    } else {
      addToFavourites(character.id)
    }
  }

  return (
    <div className="card-container">
      <BsFillStarFill
        className={isFav ? 'star-active' : 'star'}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
        onClick={toggleFav}
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