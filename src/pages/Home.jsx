import React from "react";
import Nav from "../components/Nav";
import axios from "axios";
import { useEffect, useState } from "react";
import Players from "../components/Players";

export default function Home() {
  const [players, setPlayers] = useState([]);

  // useEffect(() => {
  //   axios.get(`https://www.balldontlie.io/api/v1/players`).then((res) => {
  //     setPlayers(res.data);
  //   });
  // }, []);

  useEffect(() => {
    axios.get(`https://www.balldontlie.io/api/v1/players`).then((res) => {
      setPlayers(res.data);
      console.log(res.data.data);
    });
  }, []);

  // const allPlayers = players.map((player) => {
  //   return <Players key={player.id} />;
  // });

  return (
    <div>
      <Nav></Nav>
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
        {/* hi
        {players.map((player) => (
          <li key={player.id}>
            {player.first_name} {player.last_name}
          </li>
        ))} */}
        {/* {this.state.players.map((player) => (
          <li key={player.id}>
            {player.first_name} {player.last_name}
          </li>
        ))} */}
      </ul>
    </div>
  );
}
