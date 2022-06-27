import { useContext } from 'react'
import { CharacterContext } from '../contexts/CharacterContext'
import { PaginationContext } from '../contexts/PaginationContext'
// components
import Card from '../components/Card'
import Pagination from '../components/Pagination'


const Home = () => {
  const { nextPageUrl, nextPage, prevPageUrl, prevPage, pages, goToPage } = useContext(PaginationContext);
  const { characters, checkIfFav } = useContext(CharacterContext);

  return (
    <>
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