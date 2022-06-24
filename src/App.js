import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';

// components
import Navbar from './components/Navbar';
import Home from './pages/Home';



function App() {
  const charactersApiUrl = 'https://rickandmortyapi.com/api/character'
  const [loading, setLoading] = useState(true)
  const [characters, setCharacters] = useState([])



  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      const res = await fetch(charactersApiUrl);
      const data = await res.json();
      setCharacters(data.results)
      setLoading(false);

    }
    fetchData();
  }, [])


  return (
    <div className="app">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home characters={characters} />} />
        </Routes>
      </div>
    </div>

  );
}

export default App;
