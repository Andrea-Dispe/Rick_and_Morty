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
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [pages, setPages] = useState()

  useEffect(() => {
    // setLoading(true)
    const fetchData = async () => {
      const res = await fetch(currentPageUrl);
      const data = await res.json();
      setCharacters(data.results)
      setLoading(false);
      setNextPageUrl(data.info.next);
      setPrevPageUrl(data.info.prev);
      setPages(data.info.pages)
    }
    fetchData();
  }, [currentPageUrl])


  useEffect(() => {
    // setLoading(true)
    const fetchData = async () => {
      try {
        const res = await fetch(`${charactersApiUrl}?name=${query}`);
        const data = await res.json();
        if (data.results) {
          setCharacters(data.results)
          setLoading(false);
          setNextPageUrl(data.info.next);
          setPrevPageUrl(data.info.prev);
          setPages(data.info.pages)
        } else {
          setCharacters([])
          setPages(0)
        }
      } catch (error) {
        console.error('error: ', error);
      }
    }
    fetchData();
  }, [query])

  function nextPage() {
    setCurrentPageUrl(nextPageUrl)
  }
  function prevPage() {
    setCurrentPageUrl(prevPageUrl)
  }
  function goToPage(num) {
    setCurrentPageUrl(`${charactersApiUrl}?page=${num}&name=${query}`)
  }

  if (loading) return "Loading..."

  return (
    <div className="app">
      <SearchCharactersContext.Provider value={{ query, setQuery, nextPageUrl, nextPage, prevPageUrl, prevPage, pages, goToPage }} >
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
