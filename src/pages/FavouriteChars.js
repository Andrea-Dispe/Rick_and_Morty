import { useContext, useEffect } from 'react'
import { CharacterContext } from '../contexts/CharacterContext'

import Card from '../components/Card'


const FavouriteChars = () => {
  const { favouriteChars} = useContext(CharacterContext);

  return (
    <div className="cards-wrapper">
      {favouriteChars.length > 0 ? favouriteChars.map(char => {
        return (
          <Card character={char} key={char.id} isFav={true}/>
        )
      }) : "No Favourites"}
    </div>
  );
}

export default FavouriteChars;


