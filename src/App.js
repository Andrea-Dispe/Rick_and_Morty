import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { CharacterContext } from './contexts/CharacterContext'
import { PaginationContext } from './contexts/PaginationContext'
import { SearchContext } from './contexts/SearchContext'
import { DialogContext } from './contexts/DialogContext'

import './App.css'
// components
import Home from './pages/Home'
import FavouriteChars from './pages/FavouriteChars'
import Navbar from './components/Navbar';


const App = () => {
  const charactersApiUrl = 'https://rickandmortyapi.com/api/character'
  const [loading, setLoading] = useState(true)
  const [characters, setCharacters] = useState([])
  const [query, setQuery] = useState("")
  const [currentPageUrl, setCurrentPageUrl] = useState(`${charactersApiUrl}?name=${query}`)
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [pages, setPages] = useState()
  const [favourites, setFavourites] = useState(JSON.parse(localStorage.getItem("favourites")) || [])
  const [favouriteChars, setFavouriteChars] = useState([])
  const [hovered, setHovered] = useState(false);
  const [isOpened, setIsOpened] = useState(false);


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

  useEffect(() => {
    // setLoading(true)
    localStorage.setItem("favourites", JSON.stringify(favourites))
    if (favourites.length > 0) {
      const url = `${charactersApiUrl}/${favourites}`
      const fetchData = async () => {
        const res = await fetch(url);
        let data = await res.json();
        if (!Array.isArray(data)) {
          data = [data]
        }
        setFavouriteChars(data)
        setLoading(false);
      }
      fetchData();
    } else {
      setFavouriteChars([])
    }
  }, [favourites])


  function nextPage() {
    setCurrentPageUrl(nextPageUrl)
  }
  function prevPage() {
    setCurrentPageUrl(prevPageUrl)
  }
  function goToPage(num) {
    setCurrentPageUrl(`${charactersApiUrl}?page=${num}&name=${query}`)
  }

  function addToFavourites(charId) {
    const charIdIsPresent = favourites.findIndex(favid => favid === charId)
    if (charIdIsPresent < 0) {
      setFavourites(prevIds => [...prevIds, charId])
    }
  }

  function removeFromFavourites(charId) {
    const index = favourites.findIndex(favid => favid === charId)

    if (index >= 0) {
      const newList = [...favourites];
      newList.splice(index, 1)
      setFavourites(newList)
    }
  }

  const toggleFav = (character) => {
    if (isFav) {
      removeFromFavourites(character.id);
    } else {
      addToFavourites(character.id)
    }
  }

  const toggleHover = () => setHovered(!hovered);


  if (loading) return "Loading..."

  return (
    <div className="app">
      <CharacterContext.Provider value={{ addToFavourites, favourites, favouriteChars, removeFromFavourites, characters }} >
        <PaginationContext.Provider value={{ nextPageUrl, nextPage, prevPageUrl, prevPage, pages, goToPage }} >
          <SearchContext.Provider value={{ query, setQuery }}>
          <DialogContext.Provider value={{ toggleHover, toggleFav, setIsOpened, isOpened }}>

            <Navbar />
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="Favourites" element={<FavouriteChars />} />
              </Routes>
            </div>
          </DialogContext.Provider>
          </SearchContext.Provider>

        </PaginationContext.Provider>
      </CharacterContext.Provider>
    </div>
  );
};

export default App;
