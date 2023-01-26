import React from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.scss";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/stats">Stats</Link>
        </li>
        <li>
          <Link to="/players">Players</Link>
        </li>
        <li>
          <Link to="/teams">Teams</Link>
        </li>
        <li>
          <Link to="/games">Games</Link>
        </li>
      </ul>
    </nav>
  );
}
