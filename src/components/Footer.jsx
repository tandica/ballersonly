import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.scss";
import logo from "../assets/ballersonly-logo.png";

export default function Footer() {
  return (
    <nav className="footer-container">
      <div className="footer-items">
        <Link to="/">Home</Link>
        <Link to="/stats">Stats</Link>
        <Link to="/players">Players</Link>
        <Link to="/teams">Teams</Link>
        <Link to="/games">Games</Link>
      </div>
      <div className="footer-logo">
        <img src={logo} alt="BallersOnly logo" />
      </div>
    </nav>
  );
}
