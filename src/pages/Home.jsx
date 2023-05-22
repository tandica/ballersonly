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
  const [currentGames, setCurrentGames] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.balldontlie.io/api/v1/players?per_page=100`)
      .then((res) => {
        // console.log(res.data.data);
        // setPlayers(res.data.data);
        const { data } = res;
        const playerData = data.data;
        // console.log(playerData);
        const randomIndex = Math.floor(Math.random() * playerData.length);
        const playerOfTheWeek = playerData[randomIndex];
        console.log(playerOfTheWeek);
        console.log(typeof playerOfTheWeek);

        setPlayers(playerData[randomIndex]);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://www.balldontlie.io/api/v1/games?per_page=50&seasons[]=2022`)
      .then((res) => {
        const gameDate = res.data.data;

        //get today's date and make it into an ISO string with proper format to compare to the one in the JSON obj
        const today = new Date();
        const todayISO = today.toISOString();
        const todaysDateISO = todayISO.split("T")[0] + "T00:00:00.000Z";
        // console.log(todaysDateISO);

        for (let i = 0; i < gameDate.length; i++) {
          // console.log(getDate[i].date);
          const dateofGame = gameDate[i].date;
          //check if the date of the game is equal to day's date
          if (dateofGame === todaysDateISO) {
            // console.log(true);
            setCurrentGames(res.data.data);
          }
          // else console.log(false);
        }
        // console.log(res.data.data);
      });
  }, []);

  currentGames.map((getGames) => console.log(getGames.id));

  return (
    <div>
      <Nav />
      <div className="home-container">
        <div className="home">
          <h1 className="home-heading">Stay up to date on all things NBA</h1>
          <p className="home-text">
            Explore everything related to stats, players, teams and games
          </p>
          <div className="home-circles-container">
            <div className="home-circle">
              <a href="/stats">
                <img
                  src={statsHomepageImage}
                  alt="Kobe Bryant playing basketball"
                />
              </a>
              <Link to="/stats" className="home-circle-link">
                STATS
              </Link>
            </div>
            <div className="home-circle">
              <a href="/players">
                <img
                  src={playersHomepageImage}
                  alt="LeBron James shooting a basketball"
                />
              </a>
              <Link to="/players" className="home-circle-link">
                PLAYERS
              </Link>
            </div>
            <div className="home-circle">
              <a href="/teams">
                <img src={teamsHomepageImage} alt="Jayson Tatum pointing up" />
              </a>
              <Link to="/teams" className="home-circle-link">
                TEAMS
              </Link>
            </div>
            <div className="home-circle">
              <a href="/games">
                <img
                  src={gamesHomepageImage}
                  alt="Ja Morant in the air, close to the rim"
                />
              </a>
              <Link to="/games" className="home-circle-link">
                GAMES
              </Link>
            </div>
          </div>
        </div>
        <div className="home-triangle-dark"></div>
        <div className="home-current-games">
          <h2 className="home-current-games-title">Current Games</h2>
          <ul>
            {Array.isArray(currentGames) && currentGames.length ? (
              <ul>
                {currentGames.map((games) => (
                  <li key={games.id}>
                    {games.home_team.full_name} vs.{" "}
                    {games.visitor_team.full_name}
                    {/* {player.first_name} {player.last_name} */}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No games are currently on ;(...</p>
            )}
          </ul>
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
