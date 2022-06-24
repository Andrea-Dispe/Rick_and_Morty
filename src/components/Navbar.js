
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItems = ['Home', 'Favourites']
  return (
    <ul>
      {menuItems.map(item => {
        return (
          <Link key={item} to={item === 'Home' ? '/' : `/${item}`}>{item}</Link>
        )
      })}
    </ul>
  );
}

export default Navbar;