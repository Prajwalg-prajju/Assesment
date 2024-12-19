import React from "react";
import "./Navbar.css";
import clickSound from "./assets/click.wav"; 

const Navbar = ({ onClick }) => {
  const playHoverSound = () => {
    const sound = new Audio(clickSound); 
    sound.play();
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li
          className="navbar-item"
          onClick={() => { onClick("Home"); }}
          onMouseEnter={playHoverSound}
        >
          Home
        </li>
        <li
          className="navbar-item"
          onClick={() => { onClick("About"); }}
          onMouseEnter={playHoverSound} 
        >
          About
        </li>
        <li
          className="navbar-item"
          onClick={() => { onClick("Services"); }}
          onMouseEnter={playHoverSound} 
        >
          Services
        </li>
        <li
          className="navbar-item"
          onClick={() => { onClick("Portfolio"); }}
          onMouseEnter={playHoverSound} 
        >
          Portfolio
        </li>
        <li
          className="navbar-item"
          onClick={() => { onClick("Contact"); }}
          onMouseEnter={playHoverSound}
        >
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
