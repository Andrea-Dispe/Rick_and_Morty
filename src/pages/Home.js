import React, { useContext } from 'react'
import { SearchCharactersContext } from '../contexts/SearchCharacters'


import Card from "../components/Card"

const Home = ({ characters }) => {
  const { query, setQuery } = useContext(SearchCharactersContext);

  return (
    <>
      <div className="search">
        <input type="text"
          placeholder={"Search Character"}
          className={"input"}
          onChange={event => setQuery(event.target.value)}
          value={query}
        />
      </div>
      <div className="cards-wrapper">
        {characters && characters.length > 0 ?
          characters.map(char => {
            return (
              <Card character={char} key={char.id}/>
            )
          }) : 'There are no characters that match the query'}


      </div>
    </>
  );
}

export default Home;