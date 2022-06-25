
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const menuItems = ['Home', 'Favourites']

  return (
    <div className="navbar">
      <ul>
        {menuItems.map(item => {
          return (
            <Link key={item} to={item === 'Home' ? '/' : `/${item}`}>{item}</Link>
          )
        })}
      </ul>
      <SearchBar />
    </div>
  );
}

export default Navbar;