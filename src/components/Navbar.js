import './Navbar.css'
import {useState} from 'react'
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const menuItems = ['Home', 'Favourites']
  const [activeLink, setActiveLink] = useState(menuItems[0])

  const onUpdateActiveLink = (item) => {
    setActiveLink(item)
  }

  return (
    <div className="navbar">
      <ul>
        {menuItems.map(item => {
          return (
             <Link
              key={item} to={item === 'Home' ? '/' : `/${item}`}
              onClick={() => onUpdateActiveLink(item)}
              className={item === activeLink ? 'navbar-link-active' : 'navbar-link'}>
                {item}
             </Link>
          )
        })}
      </ul>
      <SearchBar />
    </div>
  );
}

export default Navbar;