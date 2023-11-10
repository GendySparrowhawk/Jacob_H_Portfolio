import { NavLink } from "react-router-dom";

function Header() {
  
  return (
    <header>
      <nav>
        <div>
        <NavLink to="/">Home</NavLink>
        </div>
        <div>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
