import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { SearchCharactersContext } from './contexts/SearchCharacters'

import './App.css';

// components
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  const charactersApiUrl = 'https://rickandmortyapi.com/api/character'
  const [loading, setLoading] = useState(true)
  const [characters, setCharacters] = useState([])
  const [query, setQuery] = useState("")
  const [currentPageUrl, setCurrentPageUrl] = useState(`${charactersApiUrl}?name=${query}`)


  useEffect(() => {
    // setLoading(true)
    const fetchData = async () => {
      const res = await fetch(currentPageUrl);
      const data = await res.json();
      console.log('data: ', data);
      setCharacters(data.results)
      setLoading(false);
    }
    fetchData();
  }, [])


  useEffect(() => {
    // setLoading(true)
    const fetchData = async () => {
        const res = await fetch(`${charactersApiUrl}?name=${query}`);
      const data = await res.json();
      console.log('data: ', data);
      setCharacters(data.results)
      setLoading(false);
    }
    fetchData();
  }, [query])

  if (loading) return "Loading..."

  return (
    <div className="app">
      <SearchCharactersContext.Provider value={{ query, setQuery }} >
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home characters={characters} />} />
          </Routes>
        </div>
      </SearchCharactersContext.Provider>

    </div>

  );
}

export default App;
