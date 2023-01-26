import React from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.scss";
import logo from "../assets/ballersonly-logo.png";

export default function Nav() {
  return (
    <nav className="nav-container">
      <div className="nav-logo">
        <img src={logo} alt="BallersOnly logo" />
      </div>
      <div className="nav-items">
        <Link to="/">Home</Link>
        <Link to="/stats">Stats</Link>
        <Link to="/players">Players</Link>
        <Link to="/teams">Teams</Link>
        <Link to="/games">Games</Link>
      </div>
    </nav>
  );
}
