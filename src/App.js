// import logo from "./logo.svg";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";
// import Nav from "./components/Nav";
import Home from "./pages/Home";
import Stats from "./pages/Stats";
import Players from "./pages/Players";
import Teams from "./pages/Teams";
import Games from "./pages/Games";

function App() {
  return (
    // <div>
    //   <Nav></Nav>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/players" element={<Players />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/games" element={<Games />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
