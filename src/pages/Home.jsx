import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import statsHomepageImage from "../assets/stats_homepage_circle.png";
import playersHomepageImage from "../assets/players_homepage_circle.png";
import teamsHomepageImage from "../assets/teams_homepage_circle.png";
import gamesHomepageImage from "../assets/games_homepage_circle.png";
import { Link } from "react-router-dom";
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
        <div className="home-circles-container">
          <div className="home-circle-stats">
            <img
              src={statsHomepageImage}
              alt="Kobe Bryant playing basketball"
            />
            <Link to="/stats">Stats</Link>
          </div>
          <div className="home-circle-players">
            <img
              src={playersHomepageImage}
              alt="LeBron James shooting a basketball"
            />
            <Link to="/stats">Stats</Link>
          </div>
          <div className="home-circle-teams">
            <img src={teamsHomepageImage} alt="Jayson Tatum pointing up" />
            <Link to="/stats">Stats</Link>
          </div>
          <div className="home-circle-games">
            <img
              src={gamesHomepageImage}
              alt="Ja Morant in the air, close to the rim"
            />
            <Link to="/stats">Stats</Link>
          </div>
        </div>
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
