import React, { useState } from "react";
import RightFace from "../public/assets/right_face.png";
import LeftFace from "../public/assets/left_face_full.png";
import LeftLines from "../public/assets/left-lines.png";
import { NavLink } from "react-router-dom";

function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <main>
      <section className="cta">
        <h1>Jacob Hoefer</h1>
        <p>from png to pwa and everthying inbetween</p>
        <div className="dropdown">
          <h2 onClick={toggleDropdown}>Check Out My Work</h2>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <NavLink to="/projects">Full Stack Developmment </NavLink>
              <NavLink to="/graphics">Graphic Design</NavLink>
              <NavLink to="/video">Video/Audio Editing</NavLink>
            </div>
          )}
        </div>
      </section>
      <div className="face">
        <img src={RightFace} alt="rightface" />
        <img src={LeftFace} alt="leftFace" />
        <img src={LeftLines} alt="lines" />
      </div>
    </main>
  );
}

export default Home;
