import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import Players from "../components/Players";
import "../styles/Home.scss";

export default function Home() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios.get(`https://www.balldontlie.io/api/v1/players`).then((res) => {
      setPlayers(res.data.data);
      console.log(res.data.data);
    });
  }, []);

  return (
    <div>
      <Nav />
      <div className="home-container">
        <h1 className="home-heading">Stay up to date on all things NBA</h1>
        <p className="home-text">
          Explore everything related to stats, players, teams and games
        </p>
      </div>
      <ul>
        {Array.isArray(players) && players.length ? (
          <ul>
            {players.map((player) => (
              <li key={player.id}>
                {player.first_name} {player.last_name}
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </ul>
      <Footer />
    </div>
  );
}
