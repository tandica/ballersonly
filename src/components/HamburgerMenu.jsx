import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../styles/HamburgerMenu.scss";

export default function HamburgerMenu() {
  //open and close hamburger menu
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="hamburger-menu-container">
      <button onClick={toggle} className="hamburger-menu-button">
        {/* <FontAwesomeIcon icon="fa-solid fa-bars" /> {isOpen ? " open" : ""} */}
        <i className={`fa-solid fa-bars ${isOpen ? " open" : ""}`} />
        <FontAwesomeIcon icon={faBars} size="1x" />
      </button>
      {isOpen && (
        <div className="nav-items">
          <Link to="/">Home</Link>
          <Link to="/stats">Stats</Link>
          <Link to="/players">Players</Link>
          <Link to="/teams">Teams</Link>
          <Link to="/games">Games</Link>
        </div>
      )}
    </div>
  );
}
