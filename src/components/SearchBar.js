import { useContext } from 'react';
import { SearchContext } from '../contexts/SearchContext'
import { FcSearch } from "react-icons/fc";
import { ImCross } from "react-icons/im";

import './SearchBar.css'


const SearchBar = () => {
  const { query, setQuery } = useContext(SearchContext);
  return (
    <>
    <div className="search-wrapper">
      <div className="search">
        <input type="text"
          placeholder={"Search Character"}
          className={"input"}
          onChange={event => setQuery(event.target.value)}
          value={query}
        />
        <FcSearch className="search-icon"/>
        {query ?  <ImCross className='red-xmark' onClick={e => setQuery('')} /> : ''}
      </div>
    </div>
    {/* <button onClick={e => setQuery('')} className="clear-filter">Clear search</button> */}
    </>
  );
}

export default SearchBar;