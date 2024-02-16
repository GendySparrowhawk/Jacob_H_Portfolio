import { NavLink } from "react-router-dom";
import { useState } from 'react';
import resume from "../assets/Jacob Hoefer Resume.pdf"

function Header() {
  const [resumeUrl] = useState(resume);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.setAttribute('download', 'Jacob Hoefer Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }


  return (
    <header>
      <nav>
        <div className="home">
          <NavLink to="/">Home</NavLink>
        </div>
        <div className="away">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <button className="resume" onClick={handleDownload}>Resume</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;