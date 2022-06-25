import { useContext } from 'react';
import { SearchCharactersContext } from '../contexts/SearchCharacters'
import { FcSearch } from "react-icons/fc";

const SearchBar = () => {
  const { query, setQuery } = useContext(SearchCharactersContext);
  return (
    <div className="search-wrapper">
      <div className="search">
        <input type="text"
          placeholder={"Search Character"}
          className={"input"}
          onChange={event => setQuery(event.target.value)}
          value={query}
        />
        <FcSearch className="search-icon"/>
      </div>
    </div>
  );
}

export default SearchBar;