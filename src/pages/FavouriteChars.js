import { useContext } from 'react'
import { CharacterContext } from '../contexts/CharacterContext'

import Card from '../components/Card'


const FavouriteChars = () => {
  const { characters } = useContext(CharacterContext);

  return (
    <div className="cards-wrapper">
      {characters.length === 0 ? "No Favourites" : characters.map(char => {
        return (
          <Card character={char} key={char.id} isFav={true}/>
        )
      })}
    </div>
  );
}

export default FavouriteChars;


