import Card from '../components/Card'

const FavouriteChars = ({characters}) => {

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


