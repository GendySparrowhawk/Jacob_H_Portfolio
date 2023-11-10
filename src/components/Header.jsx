import { NavLink } from "react-router-dom";
import resume from "../public/assets/Jacob_Hoefer_Resume.pdf"

function Header() {
  return (
    <header>
      <nav>
        <div className="home">
          <NavLink to="/">Home</NavLink>
        </div>
        <div className="away">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink download={resume}>Resume</NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;