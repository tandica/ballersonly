import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import HamburgerMenu from "../components/HamburgerMenu";
import axios from "axios";
import { useEffect, useState } from "react";
import Players from "../components/Players";

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
      <HamburgerMenu />
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
