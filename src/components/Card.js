import { useState, useContext } from 'react'
import Avatar from './Avatar';
import DialogModal from "./Dialog";
import { BsFillStarFill } from "react-icons/bs";
import { FavouriteCharactersContext } from '../contexts/FavouriteCharacters'



const Card = ({ character, isFav = false }) => {
  console.log('character.name: ', character.name);
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  const { addToFavourites, removeFromFavourites } = useContext(FavouriteCharactersContext);

  const [isOpened, setIsOpened] = useState(false);

  const toggleFav = () => {
    if(isFav) {
      removeFromFavourites(character.id);
    } else {
      addToFavourites(character.id)
    }
  }


  return (
    <div className="card-container">
      {/* {isFav ? <RemoveFromFavourites charId={character.id} isFav={isFav} /> : ''}
      {!isFav ? <AddToFavourites charId={character.id} isFav={isFav} /> : ""} */}
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