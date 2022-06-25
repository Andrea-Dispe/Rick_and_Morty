import { useContext } from 'react'
import { FavouriteCharactersContext } from '../contexts/FavouriteCharacters'
import { SearchCharactersContext } from '../contexts/SearchCharacters'
// components
import Card from '../components/Card'
import Pagination from '../components/Pagination'


const Home = ({ characters }) => {
  const { query, setQuery, nextPageUrl, nextPage, prevPageUrl, prevPage, pages, goToPage } = useContext(SearchCharactersContext);
  const { favourites } = useContext(FavouriteCharactersContext);

  const checkIfFav = (char) => {
    const isInFavourites = favourites.findIndex(fav => fav === char.id)
    if (isInFavourites < 0) {
      return false
    } else {
      return true
    }
  }

  return (
    <>
      {/* <div className="search">
        <input type="text"
          placeholder={"Search Character"}
          className={"input"}
          onChange={event => setQuery(event.target.value)}
          value={query}
        />
      </div> */}
      <div className="cards-wrapper">
        {characters && characters.length > 0 ?
          characters.map(char => {
            return (
              <Card character={char} key={char.id} isFav={checkIfFav(char)} />
            )
          }) : 'There are no characters that match the query'}

        <Pagination
          nextPage={nextPageUrl ? nextPage : null}
          prevPage={prevPageUrl ? prevPage : null}
          goToPage={goToPage}
          pages={pages}
        />
      </div>
    </>
  );
}

export default Home;