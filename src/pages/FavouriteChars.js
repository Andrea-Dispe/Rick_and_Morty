import { useContext } from 'react'
import { CharacterContext } from '../contexts/CharacterContext'

import Card from '../components/Card'


const FavouriteChars = () => {
  const { favouriteChars} = useContext(CharacterContext);

  return (
    <div className={favouriteChars.length % 4 === 0 ?  "cards-wrapper" : "cards-wrapper-favourites"}>
      {favouriteChars.length > 0 ? favouriteChars.map(char => {
        if(favouriteChars.length % 4 === 0) {
          console.log(';multiplo di 4')
        }
        return (
          <Card character={char} key={char.id} isFav={true} isFavPage={true}/>
        )
      }) : "No Favourites"}
    </div>
  );
}

export default FavouriteChars;


